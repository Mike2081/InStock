import React, { Component } from 'react';
import './InventoryItem.scss';


export default class InventoryItem extends Component {
  constructor() {
    super();

    this.goBack = this.goBack.bind(this);

    this.state = {
      invItem: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(item => {                
        this.setState({
          invItem: item,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {    
    const { invItem } = this.state;
   
    return <div className="InventoryItem" id={invItem.id}>
        <button onClick={() => this.goBack()} className="InventoryItem__link">
          <img className="InventoryItem__backIcon" src="/Assets/Icons/Back Arrow.svg" alt="back arrow" />
          <h2 className="InventoryItem__backText">Back</h2>
        </button>
        <div className="InventoryItem__card">
          <div className="InventoryItem__top">
            <h3 className="InventoryItem__header">{invItem.name}</h3>
            <button className="InventoryItem__newOrderButton" type="submit">
              New Order
            </button>
          </div>
          <div className="InventoryItem__productSummary">
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">description:</span>
              <p className="InventoryItem__infoText">
                {invItem.largeDescription}
              </p>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">
                Last Ordered:
              </span>
              <span className="InventoryItem__infoText">
                {invItem.lastOrdered}
              </span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">Ordered By:</span>
            <span className="InventoryItem__infoText">{invItem.orderedBy}</span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">
                Reference Number:
              </span>
              <span className="InventoryItem__infoText">{invItem.id}</span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">
                Product Category:
              </span>
            <span className="InventoryItem__infoText">{invItem.inventoryType}</span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">Quantity:</span>
              <span className="InventoryItem__infoText">
                {invItem.quantity}
              </span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">Location:</span>
              <span className="InventoryItem__infoText">{invItem.address}</span>
            </div>
            <div className="InventoryItem__info">
              <span className="InventoryItem__infoTitle">Status:</span>
              <span className="InventoryItem__infoText">
                {invItem.instock ? (
                  <span>in stock</span>
                ) : (
                  <span>not in stock</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>;
  }
}
