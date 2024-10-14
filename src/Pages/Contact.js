import React from 'react'
import "../Allcss/contact.css"
import Buttonn from '../components/button'
import TopTitle from '../components/topTitle'
import gg from '../Assets/phone.jpg';
import Navbar from '../components/navbar';
import phone from '../Assets/phone.jpg';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { APIProvider } from "@vis.gl/react-google-maps";
import Mapp from '../Pages/subpages/map'

const Contact = () => {
  return (
    <>
    <Navbar />
        <TopTitle   toptxt={'CONTACT US'} topimg={gg}/>
        <div style={{color:"blue",justifyContent:"center",alignItems:"center",display:"flex",padding:"20px"}}>
        <h1 style={{fontFamily:'hint',textAlign:'center',fontSize:'50px'}}>Feel Free to Contact Us with Any Question</h1>
        </div>
        <hr style={{width:"80%"}}></hr>
      
      
      <div className="contact-container">
      
      <div className="contact-grid">
        {/* Location */}
        <div className="contact-card">
          <h2><RoomOutlinedIcon style={{color:'blue',fontSize:'35px'}} /> Location</h2>
          <p>1234 Business St, Accra, Ghana</p>
          <p>123 Business St, Accra, USA</p>
        </div>
        
        {/* Call Us */}
        <div className="contact-card">
          <h2><CallIcon style={{color:'blue',fontSize:'35px'}} /> Call Us</h2>
          <p>+233 123 456 789</p>
          <p>+233 987 654 321</p>
        </div>
        
        {/* Email Us */}
        <div className="contact-card">
          <h2><EmailOutlinedIcon style={{color:'blue',fontSize:'35px'}} /> Email Us</h2>
          <p>info@nauhmoonocean.com</p>
          <p>support@nauhmoonocean.com</p>
        </div>

        {/* Working Hours */}
        <div className="contact-card">
          <h2><AccessTimeIcon style={{color:'blue',fontSize:'35px'}} /> Working Hours</h2>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 3:00 PM</p>
        </div>

        {/* Image */}
        
      </div>

      <div className="contact-image">
          <img src={phone} alt="Contact Us" />
        </div>
    </div>
      
      
      <div className='cont' style={{alignItem:"center",height:"auto", justifyContent:'center'}}>
        
        <div >
        <div className="Contact" id="Contact">
                <div>
                  <h2 style={{color:"blue"}}>SEND US A MESSAGE</h2>
                  <form id="contact-form">
                    <div><input className='input'  style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                    </div>
                    
                    <div ><input className='input' style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="E-mail"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    </div>
                    
                    <div>
                    <textarea className='input' style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="Text......"
                      id="message"
                      name="message"
                      rows="9"
                      required
                    ></textarea>
                    </div>
                    <Buttonn btntxt={"Submit"} btncolor={'blue'} type={SubmitEvent} />
                    
                  </form>
                </div>
              </div>

        </div>
        
          
      
      </div>
    </>
  )
}

export default Contact