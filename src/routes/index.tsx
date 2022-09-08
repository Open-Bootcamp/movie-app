import Header from '@/components/header'
import Favorites from '@/layouts/Favorites'
import Home from '@/layouts/Home'
import Search from '@/layouts/Search'
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

const AppRoute: React.FC = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/search/:name' element={< Search />} />
          <Route path='/favorite' element={< Favorites />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoute
