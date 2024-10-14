import React from 'react'
import whatwespecializein from '../../Assets/whatwespecializein.jpg';
import '../../Allcss/spec.css'

const spec = () => {
  return (
    <div>
      <div className='spec '>
  <div className='specText'>
    <h1 >What we <span style={{color:'blue'}}>Specialize</span>  in</h1>
    <p> <ul>
      <li><b>Business Facilitation:</b> Acting as intermediaries to connect businesses with regulatory bodies, investors, and partners across various industries.</li>
      <li><b>Investment Consulting:</b> Providing expert guidance on identifying and evaluating lucrative investment opportunities across 
        sectors such as oil and gas, mining, real estate, education, and healthcare.</li>
      <li><b>Project Management:</b> Offering end-to-end project management services, from planning and procurement to execution and delivery,
         ensuring projects are completed on time and within budget.</li>
      <li><b>Franchise Development and Management:</b> Assisting businesses in expanding through franchising by offering guidance on franchise models,
         legal structures, and operational support, ensuring successful replication of business models</li>
      </ul> 
      </p>
  </div>
  <div className='speci' >
  <img src={whatwespecializein} alt="c" />
  </div>
</div>
    </div>
  )
}

export default spec
