import React from 'react'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar />

    <div className='container mt-2'>
        <Switch>
            <Route exact path="/first" component={ FirstScreen } />
            <Route exact path="/second" component={ SecondScreen } />
            <Route exact path="/third" component={ ThirdScreen } />
            <Route exact path="/search" component={ SearchScreen } />

            <Redirect to="/first" />
        </Switch>
    </div>
    </>
  )
}
