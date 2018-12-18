import React, { Component } from 'react'
import '../styles/partials/WarehouseCard.scss';
import { Link } from 'react-router-dom';
export default class WarehouseCard extends Component {
  render() {
    return (
        <Link to={'/warehouses/' + this.props.warehouse }>
            <div className='frame'>
                <div className='frame__outBox'>
                    <div className='frame__outBox__wareNum1'>
                        <div className='frame__outBox__wareNum1__title'>
                            Warehouse Number { this.props.warehouse }
                        </div>
                        <div className='frame__outBox__wareNum1__bloc'>
                            <div className='frame__outBox__wareNum1__bloc__address'>
                                <div className='frame__outBox__wareNum1__bloc__address__cat'>
                                    ADDRESS
                                </div>
                                <div className='frame__outBox__wareNum1__bloc__address__inBox'>
                                    <div className='frame__outBox__wareNum1__bloc__address__inBox__info'>
                                        {this.props.street}
                                    </div>
                                    <div className='frame__outBox__wareNum1__bloc__address__inBox__info'>
                                        {this.props.city}
                                    </div>
                                    <div className='frame__outBox__wareNum1__bloc__address__inBox__info'>
                                        {this.props.postalCode}
                                    </div>
                                </div>
                            </div>            
                            <div className='frame__outBox__wareNum1__bloc__contact'>
                                <div className='frame__outBox__wareNum1__bloc__contact__cat'>
                                    CONTACT
                                </div>
                                <div className='frame__outBox__wareNum1__bloc__contact__inBox'>
                                    <div className='frame__outBox__wareNum1__bloc__contact__inBox__info'>
                                        { this.props.manager }
                                    </div>
                                    <div className='frame__outBox__wareNum1__bloc__contact__inBox__info'>
                                        { this.props.phoneNumber }
                                    </div>
                                    <div className='frame__outBox__wareNum1__bloc__contact__inBox__info'>
                                        { this.props.email }
                                    </div>
                                </div>
                            </div>
                            <div className='frame__outBox__wareNum1__bloc__inventory'>
                                <div className='frame__outBox__wareNum1__bloc__inventory__cat'>
                                    INVENTORY TYPE:
                                </div>
                                <div className='frame__outBox__wareNum1__bloc__inventory__inBox'>
                                    { this.props.inventoryType }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </Link>
    )
  }
}
