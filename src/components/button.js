import React from 'react'
import "../Allcss/button.css"

const button = ({btntxt,btncolor}) => {
  return (
    <div >
      <div style={{padding:'10px'}}>
      <button className='btn' style={{backgroundColor: btncolor, fontFamily:'hint',fontSize:'20px' }}>{ btntxt}</button>
      </div>
    </div>
  )
}

export default button