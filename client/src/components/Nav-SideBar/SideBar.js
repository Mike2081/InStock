import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-sidebar.scss';

export default class SideBar extends Component {

    render () {

        return (
            <aside className="sidebar">
                <div className="sidebar__logo">
                    <img className="sidebar__logo--icon" src="/Assets/Wordmark/Wordmark.svg" alt="logo"/>
                </div>
                    <p className="sidebar__menu">                      
                            <img className="sidebar__menu--icon" src="/Assets/Icons/Inventory.svg" alt="inventory icon"/>
                        <NavLink className="sidebar__menu--links" exact to= {'/inventory'} > 
                            <span className="sidebar__menu--title">Inventory</span>
                        </NavLink >
                    </p>

                    <p className="sidebar__menu">
                        <img className="sidebar__menu--icon" src="/Assets/Icons/Location.svg" alt="location icon"/>
                        <NavLink className="sidebar__menu--links" to="">
                            <span className="sidebar__menu--title">Locations</span>
                        </NavLink >
                    </p>

                    <p className="sidebar__menu">
                        <img className="sidebar__menu--icon" src="/Assets/Icons/User.svg" alt="users icon"/>
                        <NavLink className="sidebar__menu--links" exact to="">
                            <span className="sidebar__menu--title">Users</span>
                        </NavLink>
                    </p>                    
            </aside>
        )
    }
}