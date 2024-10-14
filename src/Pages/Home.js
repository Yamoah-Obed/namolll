import { Button } from '@mui/material';
import { useEffect,useRef  } from 'react';
import Navbar from '../components/navbar';
import React from 'react';
import '../Allcss/home.css';
import "../Allcss/services.css";
import ServiceItem from '../components/serviceItem';
import { serviceList } from '../components/servicesList';
import Buttonn from '../components/button';
import Management from './Management';
import { Link } from 'react-router-dom';
import { clientslist } from '../components/clientslist';
import Client from '../components/client';
import specimage from '../Assets/1403962.jpg'
import Howtohelp from './subpages/Howtohelp';
import Benefits from './subpages/Benefits';
import Testimonials from './subpages/testimonials';
import whatwespecializein from '../Assets/whatwespecializein.jpg'
import Visionandmission from './subpages/Visionandmission';
import Hero from '../Pages/subpages/hero';
import Spec from './subpages/spec';
import Footer from '../components/footer';




const Home = () => {


  const observeElement = (element) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    if (element) {
      observer.observe(element);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animation-left, .scroll-animation-right');
    elements.forEach((el) => observeElement(el));
  }, []);

  return (
    <>
    <Navbar />

    <div >
      <div className='background'>
        <div>
          <div className='hometext scroll-animation-left'>
            <h1>GLOBAL PARTNERSHIP</h1>
            <p>-OPENNED AND READY TO PARTNER WITH ANY BUSINESS TO ACHIEVE GOALS-</p>
            <Link to="/services"><Buttonn style={{fontSize:'30px'}} btntxt={"Explore Partnership"} btncolor={'blue'} /></Link>
          </div>
        </div>
      </div>
      


      <div>
      <div className='whatwedo scroll-animation-right' style={{ textAlign: "center", justifyContent: "center" }}>
  <h1 style={{ fontFamily:'hint'  }}> <span style={{ color: "blue"  }}>What</span> We Do </h1>
  <div className='wdcont'>
  <div className='wdtxt' >
    <p style={{lineHeight:'30px'}}>
    Nauh and Moon Ocean Limited is a leading company specializing in business facilitation, investment consulting, and project management. We partner with governments, local businesses, and foreign investors to successfully close deals and drive impactful projects. Let us help you turn your business vision into reality with our expertise and strategic partnerships."
  </p>
  </div>
  </div>

  <div>
  <Link to="/about"><Buttonn btntxt={"more about us"} btncolor={'blue'} /></Link>
  </div>
  
</div>
      </div>






      <div >
        <div className='hero' >
            
                <div className='subhero'>
                <p>Nauh and Moon Ocean Limited recognizes the vital role that innovative solutions, well-planned infrastructure, and adequate funding play in enhancing healthcare delivery.  </p>
                <h2>Core Values</h2>
                <ul>
                    <li>RESPONSIVENESS</li>
                    <li>TEAMWORK</li>
                    <li>TIMELINESS</li>
                    <li>INTEGRITY</li>
                    <li>EXCELLENCE</li>
                    <li>ACCOUNTABILITY</li>
                </ul>
                </div>
                

            </div> 
      
    </div>






   


<Spec />




      
<Howtohelp />

   

      <div className='clientt' style={{ padding: "25px" }}>
        <h1 style={{fontFamily:'hint'}}>Our <span style={{color:'blue'}}>Clients</span> </h1>
        <div className='wdcont'>
        <div className='wdtxt' >
    <p style={{lineHeight:'30px'}}>
    we partner with governments, international organisations, foudations, investors and non governmental organisations(NGOs)
  </p>
  </div>
  </div>


        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {clientslist.map((clients, key) => {
            return (<Client key={clients.key} client={clients.clients} />)
          })}
        </div>
      </div>


      <div style={{ backgroundColor: "black", alignItems: "center", padding: "18vh 0" }}>
        <div style={{ maxWidth: "750px", margin: 'auto auto' }}>
          <h2 style={{ color: "blue" }}>our philosophy</h2>
          <h1 style={{ color: "white", fontSize: '45px' , padding:'20px',fontFamily:'hint'}}>CONNECTING WITH FOREIGN AND LOCAL BUSINESSES</h1>
          <p style={{ color: "white" , lineHeight:'30px'}}>In case you wish to develop your business across Africa and improve your financial planning, we are happy to provide you with several options to get started right away. Our experts will assist with the selection of the best plan and strategy for your specific business.</p>
        </div>
      </div>


      <Benefits />
     

      <div className='help'>

      <div className='serv'>
        <h1 style={{fontFamily:'hint'}}>How we Can <span style={{color:'blue'}}>Help You</span> </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
    {serviceList.slice(0, 3).map((service, key) => {
      return (<ServiceItem key={service.key} image={service.image} Heading={service.Heading} txt={service.txt} txt2={service.txt2} />)
    })}
  </div>
      </div>

      
  <Buttonn btntxt={"view more"} btncolor={'blue'} />

      </div>

 
<Testimonials />

      <div className='homecont'>
        <div className='subhomecont'>
          <h1 style={{fontSize:'45px',fontFamily:'hint',color:'white'}}>Get in Touch</h1>
          <div style={{paddingBottom:'20px'}}>
          <Buttonn btntxt='CONTACT US ' btncolor='orange'/>
          <Buttonn btntxt='KNOWLEDGE HUB' btncolor='green' />
          </div>
          
         </div> 

      </div>

      <Footer />

      </div>
  
    </>
  );
}

export default Home;