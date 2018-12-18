import React, { Component } from 'react';
import './nav-sidebar.scss';

export default class NavBar extends Component {

    submitHandler = (event) => {
        event.preventDefault();
    }

    render () {

        return (
            <nav className="navbar">
            <form className="navbar__search">
                <label>
                <input className="navbar__search--input" type="text" placeholder="Search" name="search"/>
                </label>
                <button onClick={this.submitHandler} className="navbar__search--button"type="submit" value="submit"> <img src="/Assets/Icons/Search.svg" alt="search icon"/> </button>
            </form>
            <div className="navbar__options">
                <div className="navbar__options--profile-img">
                    <img className="navbar__options--avator" src="/Assets/Images/elk.png" alt="user profile image"/>
                </div>
                <img className="navbar__options--icon" src="/Assets/Icons/Dropdown.svg" alt=""/>
            </div>
            </nav>
        )
    }
}