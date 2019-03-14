import React, { Component } from 'react';
import ListCard from './ListCard';
import './inventory-list.scss';

const URL = '/inventory';

export default class InventoryList extends Component {
	state = {
		inventory: []
	};

	componentDidMount() {
		fetch(URL)
			.then(response => response.json())
			.then(jsonInventoryData => {
				this.setState({
					inventory: jsonInventoryData
				});
			})
			.catch(err => console.log(err));
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.inventory.length === this.state.inventory.length) {
			console.log('updatebreak');
			return;
		}
	}
	delete = id => {
		let init = {
			method: 'DELETE'
		};
		let useUrl = URL + '/' + id + '/delete';
		console.log(useUrl);
		fetch(useUrl, init)
			.then(res => {
				return res.json();
			})
			.then(resjson => {
				console.log(resjson);
				this.setState({
					inventory: resjson
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		const { inventory } = this.state;
		const id = this.props.match.params.id;

		return (
			<section className='inventory-list'>
				<div className='inventory-list__header'>
					<h2 className='inventory-list__header--inventory'>Inventory</h2>
					<h4 className='inventory-list__header--filter'>Filter</h4>
				</div>
				<table>
					<tr className='table__item-list'>
						<th scope='col' className='table__item-list--header'>
							item
						</th>
						<th scope='col' className='table__item-list--header'>
							last ordered
						</th>
						<th scope='col' className='table__item-list--header'>
							location
						</th>
						<th scope='col' className='table__item-list--header'>
							quantity
						</th>
						<th scope='col' className='table__item-list--header'>
							status
						</th>
						<th scope='col' className='table__item-list--header' />
					</tr>
					<tbody>
						{inventory
							.filter(inventory =>
								id ? inventory.warehouseId == id : inventory
							)
							.map((obj, index) => (
								<ListCard
									key={index}
									id={obj.id}
									name={obj.name}
									smallDescription={obj.smallDescription}
									lastOrdered={obj.lastOrdered}
									quantity={obj.quantity}
									instock={obj.instock}
									address={obj.address}
									delete={this.delete}
								/>
							))}
					</tbody>
				</table>
			</section>
		);
	}
}
