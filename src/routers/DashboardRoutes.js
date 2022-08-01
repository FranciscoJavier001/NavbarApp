import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Routes, Route } from 'react-router-dom'

import { FirstScreen } from '../components/pages/FirstScreen'
import { SecondScreen } from '../components/pages/SecondScreen'
import { ThirdScreen } from '../components/pages/ThirdScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar />

    <div className='container mt-2'>
        <Routes>
            <Route path="/firstScreen" component={ < FirstScreen /> } />
            <Route path="/secondcreen" component={ < SecondScreen /> } />
            <Route path="/thirdScreen" component={ < ThirdScreen /> } />
            <Route path="/search" component={ < SearchScreen /> } />

            <Route path="/" element={ <FirstScreen />} />

        </Routes>
    </div>
    </>
  )
}
