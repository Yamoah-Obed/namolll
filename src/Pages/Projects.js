import React from 'react'
import TopTitle from "../components/topTitle"
import gg from "../Assets/feasible.jpg"
import { projectList } from '../components/projectList'
import ProjectItem from '../components/projectItem'
import Navbar from '../components/navbar'

const Projects = () => {
  return (
    <>
        <div>
        <Navbar />
        <div style={{alignItems:"center"}}>
        <TopTitle toptxt={"SECTORS"} topimg={gg} />

        <h2 style={{padding:"30px",color:"blue",fontSize:"30px"}}>we are openned of all kind of </h2>
          <hr style={{width:"80%"}}></hr>
        <div className='servicecontainer'>
        </div>
        
        
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap",padding:"20px"}}>
            {projectList.map((project,key) => {
                return(<ProjectItem key={project.key} image={project.image} Heading={project.Heading} Linkk={project.Linkk} /> )
            } )}
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Projects