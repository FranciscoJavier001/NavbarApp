import React from 'react'
import { FirstScreen } from '../components/pages/FirstScreen'
import { SecondScreen } from '../components/pages/SecondScreen'
import { ThirdScreen } from '../components/pages/ThirdScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'

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
