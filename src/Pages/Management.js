import React from 'react'
import StaffItem from '../components/staffItem'
import {staffsList} from '../components/staffsList'
import "../Allcss/about.css"
import TopTitle from '../components/topTitle'
import gg from "../Assets/1403962.jpg"
import Navbar from '../components/navbar'


const Management = () => {
  return (
    <>
    <Navbar />
        <TopTitle toptxt={'MANAGEMENT'} topimg={gg} />
        <div style={{height:"auto"}}>
         <div style={{padding:"20px",}}>
            <div style={{padding:"20px",}}><p>A well-qualified Board of Trustees, comprising of individuals with different experiences to oversee the activities of Nuah and Moon Ocean Limited</p></div>
            <hr style={{width:"50%",height:"2px",backgroundColor:"blue"}}></hr>

        </div>

        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {staffsList.map((staff,key) => {
                return(<StaffItem key={staff.key} image={staff.image} Heading={staff.Heading} txt={staff.txt}/> )
            } )}
            </div>
        </div>
    </>
  )
}

export default Management