import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = (props) => {
    //console.log(props)
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a className="brand-logo">routes</a>
                <ul className="right">
                    <li><Link to="/"> Home </Link></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><NavLink to="/contact"> Contact </NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar)