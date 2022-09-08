import { ReactNode } from 'react'

const Slide = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className='slider-image'>
      {children}
    </div>
  )
}

export default Slide
