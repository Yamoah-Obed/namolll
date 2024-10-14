import React from 'react'
import TopTitle from '../../components/topTitle'
import gg from '../../Assets/realestate.jpg'
import Navbar from '../../components/navbar'


const Realestate = () => {
  return (
    <div>
       <div>
        <Navbar />
        <div style={{alignItems:"center"}}>
        <TopTitle toptxt={"SECTORS"} topimg={gg} />

        <h2 style={{padding:"30px",color:"blue",fontSize:"30px",fontFamily:'hint'}}>REAL ESTATE</h2>
          <hr style={{width:"80%"}}></hr>
        <div className='oilandgastxt' >
          <p style={{width:'70%',margin:'0 auto', justifyContent:'center'}}>Real estate development is a fast-moving sector that requires significant coordination between multiple stakeholders, substantial financial backing, and precise project management. Nauh and Moon Ocean Limited offers tailored services to help clients navigate this industry’s complexities, from securing investment and regulatory approvals to managing projects through their entire life cycle. Below is an expanded explanation of how we assist in real estate development:</p>
              <div style={{backgroundColor:'grey',width:'100%'}}>
             
             <div style={{width:'70%',margin:'0 auto',textAlign:'left', justifyContent:'center'}}>
             <h2>Business Facilitation :</h2>
              <p>Real estate projects involve a wide range of participants, including developers, architects, contractors, and government bodies. Nauh and Moon Ocean Limited acts as a facilitator, ensuring all necessary parties are aligned and working together efficiently.</p>
                <ul>
                  <li>Connecting Developers with Investors:</li>
                  <ul>

                       <li>We assist in crafting detailed business plans and financial projections to attract investors, ensuring that the project aligns with their financial goals and risk appetites.</li>

                  </ul>
                  <li>Engaging with Regulatory Bodies:</li>
                  <ul>
                    <li>We work closely with regulatory authorities, ensuring that developers meet all legal requirements. We also handle negotiations with local governments to secure permits and ensure that the project complies with all environmental and safety standards.</li>
                    <li>Real estate projects must comply with a wide range of regulations and building codes at the municipal, regional, or national levels. Obtaining planning permissions, environmental approvals, and meeting zoning requirements are crucial steps in moving a project forward.</li>
                  </ul>
                  <li>Building Strong Networks with Contractors and Architects:</li>
                  <ul>
                    <li>The success of a real estate development project depends on assembling the right team of contractors, architects, and engineers. Nauh and Moon Ocean Limited connects developers with trusted and qualified professionals to ensure that the project is designed and built to the highest standards.</li>
                
                  </ul>
                  <li>Public-Private Partnerships (PPPs):
                    <ul>
                      <li>For larger infrastructure or housing projects, we also facilitate public-private partnerships (PPPs), bringing together government entities and private developers to work on projects that can benefit communities. This can include affordable housing developments, transportation hubs, or urban renewal initiatives</li>
                    </ul>
                  </li>
                </ul>

             </div>
             </div>

             <div style={{width:'70%',margin:'0 auto',textAlign:'left', justifyContent:'center'}}>
              

                <h2>Project Management:</h2>
                <p>Managing real estate projects from land acquisition to construction and marketing requires detailed oversight and coordination. Nauh and Moon Ocean Limited provides full-service project management to ensure that developments are executed smoothly, on time, and within budget.</p>
                <ul>
                  <li>Land Acquisition and Site Assessment</li>
                  <ul>
                    <li>One of the first critical steps in real estate development is acquiring the right piece of land. We assist clients in identifying and securing prime real estate locations, conducting due diligence to assess the suitability of the site for development</li>
                  </ul>
                  <li style={{}}>Planning and Design Coordination</li>
                  <ul>
                    <li>We coordinate with municipal authorities to ensure the project meets all zoning and regulatory approvals. Our goal is to create a project that not only meets the client’s vision but also enhances the surrounding community.</li>
                  </ul>
                  <li><b>Procurement and Construction Oversight</b></li>
                  <ul>
                    <li>Nauh and Moon Ocean Limited handles procurement, ensuring that all necessary materials, labor, and equipment are sourced at competitive rates. By overseeing contracts and supply chain management, we help mitigate the risks of cost overruns or delays</li>
                    <li>We also prepares detailed financial reports for investors, offering transparency on expenditure and helping them assess the return on their investment</li>
                  </ul>

                  
                  <li>Post-Construction Management:</li>
                  <ul>
                    <li>Once the development is completed, Nauh and Moon Ocean Limited assists with property management, ensuring the smooth operation of facilities, coordinating with property managers, and handling any legal or operational issues that may arise post-construction.</li>
                  </ul>
                  
                </ul>

              </div>
              
        </div>

        
    </div>
    </div>
    </div>
  )
}

export default Realestate