import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const AppRouter = () => {

    const { user } = useContext(AuthContext)
  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                exact
                path="/login"
                component={ LoginScreen }
                isAuthenticated={ user.logged } 
                />

                <PrivateRoute
                path="/"
                component={ DashboardRoutes }
                isAuthenticated={ user.logged }
                />
            </Switch>
        </div>
    </Router>
  )
}
