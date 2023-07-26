import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Customers from '../../Pages/Customers'
import Dashboard from '../../Pages/Dashboard'
import Inverntory from '../../Pages/Inverntory'
import Orders from '../../Pages/Orders'

const AppRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/inventory' element={<Inverntory/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
            <Route path='/customers' element={<Customers/>}></Route>
         </Routes>
    </div>
  )
}

export default AppRoutes