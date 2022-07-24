import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const context = useContext(AuthContext)
    // const context.user.name = useContext(AuthContext)
    // const {user:{name}, dispatch} = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {

        history.replace('/login')

        dispatchEvent({
            type: types.logout
        })
    }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <link
      className='navbar-brand'
      to="/">
        NavbarApp
      </link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/firstcreen"
          >
            FirstScreen
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/secondcreen"
          >
            SecondScreen
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/thirdScreen"
          >
            ThirdScreen
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            SearchScreen
          </NavLink>

        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>

          <span className='nav-item nav-link text-info'>
            {context.user.name}
            {/* {name} */}
          </span>

          <button
          className='nav-item nav-link btn'
          onClick={handleLogout}>
            Logout
          </button>
          
        </ul>
      </div>
    </nav>
  )
}