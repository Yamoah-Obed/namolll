import React from 'react'
import "../Allcss/footers.css"
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <>
        <footer style={{background:'darkblue', color:'white'}}>
            <div className='footer' style={{display:"flex", justifyContent:"center",padding:"20px"}}>

                <div className='F1'style={{maxWidth:"30%",padding:"20px"}}> 
                    <h2>NAMOL</h2>
                    <h3 style={{fontFamily:'hint'}}>QUICK LINKS</h3>
                    <Link to='/services' ><p>What we do</p></Link>
                    <Link to='/about'><p>Who we are</p></Link>
                    <Link to='/project'><p>Sectors we cover</p></Link>
                    <Link to='/management'><p>Our team</p></Link>



                </div>

                <div className='F1' style={{maxWidth:"30%",padding:"20px"}}>
                    <h2 style={{fontFamily:'hint'}}>CALL NOW</h2>
                    <h3>+170 12 603 908</h3>
                    <p >Let us hear from you on our services. We are on standbyto answer all your finance and investment questions.</p>
                </div>

                <div className='F1' style={{maxWidth:"30%",padding:"20px"}}>
                    <h2 style={{fontFamily:'hint'}}>OUR ADDRESS</h2>
                    <h3>P.o. Box 156 Ghana</h3>
                    <h3>@gmail.com</h3>
                </div>

                <div className='F1' style={{maxWidth:"20%",padding:"20px"}}>
                    <h2 style={{fontFamily:'hint'}}>SOCIAL MEDIA</h2>
                    <p>Connect with us on social and we will get in touch:</p>
                    <div>

                    </div>
                </div>
            </div>

            <div>© 2024 Nauh and Moon Ocean Ltd. All Rights Reserved</div>
            
        </footer>
    </>
  )
}

export default footer