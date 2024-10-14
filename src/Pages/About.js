import React from 'react';
import '../Allcss/about.css';
import gg from '../Assets/1403962.jpg';
import TopTitle from '../components/topTitle';
import Navbar from '../components/navbar';



const About = () => {
  return (
    <>
      <div>
      <Navbar />
        <TopTitle toptxt={'ABOUT US'} topimg={gg} />
        <div style={{ padding: '20px' }}>
          <div style={{ padding: '20px' }}>
            <h2>OVERVIEW</h2>
          </div>
          <hr style={{ width: '50%', height: '2px', backgroundColor: 'blue' }} />
          <div className='abt'
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='abttxt'>
              <p>
              Nauh and Moon Ocean Limited was established and officially registered on March 15, 2018. Since its inception, the company has been committed to providing expert services in business facilitation, investment consulting, and project management across a wide range of sectors, including oil and gas, mining, real estate, healthcare, education, and infrastructure development.
Founded with the vision of becoming a trusted partner for both local and international businesses, Nauh and Moon Ocean Limited has built a strong reputation by connecting clients with strategic partners, facilitating government and private sector collaborations, and overseeing large-scale projects. Over the years, the company has expanded its services to include franchise development and infrastructural growth, making it a key player in various industries.
              </p>
            </div>
            <div className='abttxtimg'>
              <img style={{ width: '80%', height: '500px', borderRadius: '30px' }} src={gg} alt='' />
            </div>
          </div>
          <div>

</div>

        </div>

<div className='mv'>

<div className='mvv'>
          <div className='mvvmission'>
            <h2>Mission</h2>
            <p>Our mission is to drive business growth and innovation by providing expert facilitation, strategic investment consulting, and comprehensive project management services.  
            , we aim to create sustainable value for our clients, partners, and communities.</p>
          </div>
          <div className='mvvvision'>
          <h2>Vision</h2>
          <p>To be a leading global partner in facilitating impactful projects and investments across diverse sectors, fostering economic development, and shaping a
          sustainable future through strategic partnerships and innovation.</p>
          </div>
        </div>

</div>
        
        <div className='obj'>
          <div className='abttxt1img'><img style={{width: '80%', height: '500px', borderRadius: '30px' }} src={gg}  alt ='' /></div>
          <div className='abttxt' >
            <h2>OBJECTIVES</h2>
            <p className='abttxt1'> Nauh and Moon Ocean Limited was established and officially registered on March 15, 2018. Since its inception, the company has been committed to providing expert services in business facilitation, investment consulting, and project management across a wide range of sectors, including oil and gas, mining, real estate, healthcare, education, and infrastructure development.
            Founded with the vision of becoming a trusted partner for both local and international businesses, Nauh and Moon Ocean Limited has built a strong reputation by connecting clients with strategic partners, facilitating government and private sector collaborations, and overseeing large-scale projects. Over the years, the company has expanded its services to include franchise development and infrastructural growth, making it a key player in various industries.</p>
          </div>
        
        </div>


      </div>

      
      
    </>
  );
};

export default About;