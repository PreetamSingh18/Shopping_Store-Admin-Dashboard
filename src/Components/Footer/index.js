import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className=' flex justify-evenly h-[5vh] bg-gray-600 w-full  bottom-0'>
     <div >
        <h3 className='max-sm1:text-xs'>Preetam Singh &copy; 2023</h3>
     </div>
     <div>
      <h3 className='text-blue-400 max-sm1:text-xs'>Privacy Policy</h3>
     </div>
     <div className='flex justify-evenly mr-4  max-sm1:text-sm max-sm1:mr-2'>
      <Link to="https://www.linkedin.com/in/preetamsingh18">
        <FontAwesomeIcon icon={faLinkedin} className={"mr-2 text-sky-700 "}/>
      </Link>
      <Link to="https://github.com/PreetamSingh18">
        <FontAwesomeIcon icon={faGithub} className={"mr-2 text-black-700"}/>
      </Link>
      <Link to="https://www.instagram.com/preetamsingh_18">
        <FontAwesomeIcon icon={faInstagram} className={"mr-2  text-pink-700"}/>
      </Link>
     </div>

    </div>
  )
}

export default Footer;