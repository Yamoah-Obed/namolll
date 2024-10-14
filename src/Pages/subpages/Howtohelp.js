import React from 'react'
import ProjectItem from '../../components/projectItem'
import { projectList } from '../../components/projectList'
import Button from '../../components/button'
import {Link} from 'react-router-dom'
import './howto.css'


const Howtohelp = () => {
  return (
    <div className='howto'>
    <p style={{textAlign:'left',marginLeft:'60px' }}>-- HOW WE CAN HELP YOU</p>
      <div style={{display:'flex',justifyContent:'space-between',padding:'20px 60px'}}>
        <div>
        
        <h1 style={{fontSize:'45px', fontFamily:'hint'}}>Investment <span style={{color:'blue'}}>Sector</span> </h1>
            </div>

            <div className='hide1'>
            <Link to='/projects'></Link><Button  btntxt='MORE SECTORS' btncolor='blue'/>
            </div>
        
      </div>

      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap",padding:"0px 20px"}}>
            {projectList.slice(0, 3).map((project,key) => {
                return(<ProjectItem key={project.key} image={project.image} Heading={project.Heading} /> )
            } )}
        </div>

<div className='hide2'>
<Link to='/projects'></Link><Button  btntxt='MORE SECTORS' btncolor='blue'/>
</div>
        
  


    </div>
  )
}

export default Howtohelp
