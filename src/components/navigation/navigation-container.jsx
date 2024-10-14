import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav-wrapper'>
                <div className='left-side'>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contact
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Blog
                        </NavLink>
                    </div>                    
                </div>

                <div className='right-side'>
                    IKASTOLA HARRI
                </div>
            </div>
        )
    }
}