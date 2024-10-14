import React from 'react';
import "../Allcss/project.css";
import { Link } from 'react-router-dom';
import Button from './button';

const ProjectItem = ({ image, Heading, Linkk, Text }) => {
  return (
    <Link to={Linkk}>
      <div className='projectItem' style={{ backgroundImage: `url(${image})`, margin:'20px' }}>
        <h3>{Heading}</h3>
        <Button btntxt='READ MORE' btncolor='blue' />

      </div>
    </Link>
  );
};

export default ProjectItem;