import { ReactNode } from 'react'

const Slide = ({ children }: { children: ReactNode }) => {
  return (
    <div className='slider-image'>
      {children}
    </div>
  )
}

export default Slide
