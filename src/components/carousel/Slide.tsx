
const Slide = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='slider-image'>
      {children}
    </div>
  )
}

export default Slide
