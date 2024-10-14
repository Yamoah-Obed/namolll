import React from 'react'
import { Link } from 'react-router-dom'
import './subtable.css'

const subtable = () => {
  return (
    <div>
      <div className='subtable'>
            <table className='table'>
                <tr >
                    <td><Link to='/oilandgas'>Oil and Gas</Link></td>  
                </tr>
                
                <tr>
                    <td><Link to='/mining'>Mining</Link></td>
                </tr>
                
                <tr>
                    <td><Link to='/education'>Education</Link></td>
                </tr>
                
                <tr>
                    <td><Link to='/realestate'>Real Estate</Link></td> 
                </tr>
                
                <tr>
                    <td><Link to='/health'>Health</Link></td>   
                </tr>
                
            </table>
        </div>
    </div>
  )
}

export default subtable
