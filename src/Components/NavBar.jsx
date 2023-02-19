import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/jokes" activeClassName="active">Jokes</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar