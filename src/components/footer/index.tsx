
import Github from '@/assets/github.svg'
import './style.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <h1 className='logo'>MOVIE APP</h1>
      <div className='repo' title='Go to repository'>
        <a href="https://github.com/Open-Bootcamp/movie-app" target='_blank'>Github repository</a>
        <img src={Github} alt="Github icon" />
      </div>
      <span className='chl'>Copyright 2022. All Rights Reserved.</span>
    </div>
  )
}

export default Footer
