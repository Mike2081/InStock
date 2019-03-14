import React, { Component } from 'react';
import WarehouseCard from './WarehouseCard.js';
import Modal from './Modal';
import '../styles/partials/Warehouses.scss';

export default class Warehouses extends Component {
	constructor() {
		super();

		this.handleClose = this.handleClose.bind(this);
		this.fetchWarehouses = this.fetchWarehouses.bind(this);

		this.state = {
			isOpen: false,
			warehouseInfo: []
		};
	}

	componentDidMount() {
		this.fetchWarehouses();
	}

	fetchWarehouses() {
		console.log('fecthed');

		fetch('/warehouses')
			.then(response => response.json())
			.then(data => {
				this.setState({
					warehouseInfo: data
				});
			})
			.catch(err => {
				console.error(err);
			});
	}

	handleClose() {
		this.setState(prevState => {
			return { isOpen: !prevState.isOpen };
		});
	}

	render() {
		const { isOpen } = this.state;
		let wareBlocks = [];
		if (this.state.warehouseInfo[0]) {
			for (let i = 0; i < this.state.warehouseInfo.length; i++) {
				let block = (
					<WarehouseCard
						street={this.state.warehouseInfo[i].address.street}
						city={this.state.warehouseInfo[i].address.city}
						postalCode={this.state.warehouseInfo[i].address.postalCode}
						manager={this.state.warehouseInfo[i].contact.manager}
						phoneNumber={this.state.warehouseInfo[i].contact.phoneNumber}
						email={this.state.warehouseInfo[i].contact.email}
						inventoryType={this.state.warehouseInfo[i].inventoryType}
						warehouse={this.state.warehouseInfo[i].id}
					/>
				);
				wareBlocks.push(block);
			}
		} else {
			wareBlocks.push('wareBlocks is loading');
		}
		return (
			<div className='window'>
				<button className='window__modal-button' onClick={this.handleClose}>
					<img
						className='window__modal-plus'
						src='/Assets/Icons/plus.svg'
						alt='plus button'
					/>
				</button>
				<Modal
					handleClose={this.handleClose}
					fetchWarehouses={this.fetchWarehouses}
					isOpen={isOpen}
				/>
				<div className='window__container'>
					<p className='window__container__title1'>Locations</p>
					<div className='window__container__title2'>Filter</div>
				</div>
				<div>{this.state.warehouseInfo[0] && wareBlocks}</div>
			</div>
		);
	}
}
