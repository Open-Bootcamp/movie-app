import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Search from '@/layouts/Search'
import Favorites from '@/layouts/Favorites'
import Home from '@/layouts/Home'

const AppRoute:React.FC = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path= '/' element = {< Home />} />
          <Route path= '/search' element = {< Search />} />
          <Route path = '/favorite' element = {< Favorites />} />
          <Route path ='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoute