import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';

function Nav() {
  return (
    <div className='nav'>
      <div className='container'>
        <a href='mailto:brianna.workman@hotmail.com'>Contact</a>
        <a href='https://resume.creddle.io/resume/ba5qjpkswa6' target='_blank'>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Nav;
