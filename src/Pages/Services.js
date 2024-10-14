import React from 'react'
import "../Allcss/services.css"
import TopTitle from '../components/topTitle'
import gg from "../Assets/1403962.jpg"
import ServiceItem from '../components/serviceItem'
import { serviceList } from '../components/servicesList'
import Navbar from '../components/navbar'

const Services = () => {
  return (
    <div>
      
        <div style={{alignItems:"center"}}>
        <Navbar />
        <TopTitle toptxt={"SERVICES"} topimg={gg} />
        <h2 style={{padding:"30px",color:"blue",fontSize:"30px"}}>We Offer a Range of Services to Meet Your Needs</h2>
          <hr style={{width:"80%"}}></hr>
        <div className='servicecontainer'>
        <div className='servicetxt'><p style={{lineHeight:'25px'}}>Nauh and Moon Ocean Limited offers a diverse array of services tailored to meet the unique needs of each client. Our expertise spans across business facilitation, investment consulting, and project management, ensuring that clients have the support they need to succeed at every stage of their journey. From conducting in-depth market research and feasibility studies to navigating regulatory requirements, we provide the insights and guidance necessary for informed decision-making. By fostering strategic partnerships, managing risks, and delivering customized growth solutions, we empower our clients to achieve sustainable success and unlock new opportunities in their industries"</p></div>
        </div>
        </div>
        
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {serviceList.map((service,key) => {
                return(<ServiceItem key={service.key} image={service.image} Heading={service.Heading} txt={service.txt} txt2={service.txt2} /> )
            } )}
        </div>
        

    </div>
  )
}

export default Services