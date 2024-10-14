import React from 'react'
import "../Allcss/services.css"


const serviceItem = ({image,Heading,txt,txt2}) => {
  return (
    <>
        <div className='serviceItem'>
           <img className='img' src={image} alt="" />
            <h3>{Heading}</h3>
            <p style={{lineHeight:'20px'}}>{txt}</p>
              
        </div>

    </>
  )
}

export default serviceItem