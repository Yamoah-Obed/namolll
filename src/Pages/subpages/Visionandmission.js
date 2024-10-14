import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Visionandmission = () => {
  return (
    <div>
      <div className='vision' style={{height:'auto', width:'100%',display:'flex',justifyContent:'center', color:'white'}}>
        <div  style={{height:'60vh',width:'20%', backgroundColor:'Darkblue', borderRadius:'5px 90px', margin:'20px',paddingTop:'50px'}}>
            <RemoveRedEyeOutlinedIcon style={{fontSize:'70px'}} />
            <h2>Mission</h2>
            <p style={{padding:'10px'}}>Our mission is to drive business growth and innovation by providing expert facilitation, strategic investment consulting, and comprehensive project management services.  
              , we aim to create sustainable value for our clients, partners, and communities.</p>
        </div>
        <div style={{height:'60vh',width:'20%', backgroundColor:'orange', borderRadius:'5px 90px',margin:'20px',paddingTop:'50px'}}>
            <RemoveRedEyeOutlinedIcon style={{fontSize:'70px'}}/>
            <h2>Vision</h2>
            <p style={{padding:'10px'}}>To be a leading global partner in facilitating impactful projects and investments across diverse sectors, fostering economic development, and shaping a
               sustainable future through strategic partnerships and innovation.</p>
        </div>
        <div  style={{height:'60vh',width:'20%', backgroundColor:'green', borderRadius:'5px 90px',margin:'20px',paddingTop:'50px'}}>
            <RemoveRedEyeOutlinedIcon style={{fontSize:'70px'}}/>
            <h2>Objective</h2>
            <p style={{padding:'10px'}}>To Foster Strategic Partnerships,Enhance Client Success,Promote Sustainable Development,Maintain Operational Excellence,Maximize Investment Opportunities</p>
        </div>


      </div>
    </div>
  )
}

export default Visionandmission
