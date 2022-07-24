import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => { //** Exportamos el LS y recibimos el history */

    // const {dispatch} = useContext(AuthContext)
    const context = useContext(AuthContext) //** Importamos el context y le pasamos el dispatch */
    console.log(context)

    const handleLogin = () => { //** Funcion que no recibe nada */

      const lasthPath = localStorage.getItem('lastPath') || '/' //** Obtenemos el ultimo path o mandamos al / */

      context.dispatch({ //** La accion que dispara esta funcion, en el AuthContext en CreateContext */
        type: types.login, //** Necesitamos definir el tipo de accion */
        payload: {
          name: 'Usuario'
        }
      })

      history.push(lasthPath) //** Mandamos al history el ultimo path */
    }

  return (
    <div>
      <h1>Login</h1>
      <hr />

      <button //** Asignamos un boton */
        className='btn btn-primary' //** Clases de Bootstrap */
        onClick={handleLogin}> {/* Funcion que se ejecuta al hacer click */}
          Login
        </button>

    </div>
  )
}