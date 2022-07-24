import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const context = useContext(AuthContext)
    // const {user:{name}, dispatch} = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {

        history.replace('/login')

        dispatchEvent({
            type: types.logout
        })
    }

  return (
    <div></div>
  )
}