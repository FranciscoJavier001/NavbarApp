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
            <Route path="/firstScreen" element={ < FirstScreen /> } />
            <Route path="/secondScreen" element={ < SecondScreen /> } />
            <Route path="/thirdScreen" element={ < ThirdScreen /> } />
            <Route path="/search" element={ < SearchScreen /> } />

            <Route path="/" element={ <FirstScreen />} />

        </Routes>
    </div>
    </>
  )
}
