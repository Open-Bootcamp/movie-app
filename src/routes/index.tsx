import GoTop from '@/components/gotop'
import Header from '@/components/header'
import Favorites from '@/layouts/Favorites'
import Home from '@/layouts/Home'
import Movies from '@/layouts/Movies'
import Search from '@/layouts/Search'
import Series from '@/layouts/Series'
import Trending from '@/layouts/Trending'
import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

const AppRoute: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <GoTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:name" element={<Search />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/movie' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/trending' element={<Trending />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default AppRoute
