
import Github from '@/assets/github.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './style.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <h1 className='logo'>MOVIE APP</h1>
      <a href="https://github.com/Open-Bootcamp/movie-app" target='_blank'>
        <div className='repo' title='Go to repository'>
          <span className='txt_a'>Github repository</span>
          <LazyLoadImage src={Github} alt="Github icon" />
        </div>
      </a>
      <span className='chl'>Copyright 2022. All Rights Reserved.</span>
    </div>
  )
}

export default Footer
