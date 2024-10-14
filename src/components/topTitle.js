import React from 'react'
import "../Allcss/toptitle.css"

const topTitle = ({topimg,toptxt}) => {
  return (
    <>
    <div className='topTitle'>
        <div  className='topimg' style={{backgroundImage:`url(${topimg})`}}>
        <h1 style={{fontFamily:'hint'}}>{toptxt}</h1>
    </div>
    </div>
    </>
    
    
  )
}

export default topTitle