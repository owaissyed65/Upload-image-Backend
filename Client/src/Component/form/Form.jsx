import React from 'react'
import './Form.css'
import owais from '../../images/owaiis.jpg'
import { Link, useLocation } from 'react-router-dom'
import Information from './Information'
import Experience from './Experience'

const Form = () => {
  const location = useLocation();
  return (
    <>
      <div className="shadow form-fill">
        <div className="shadow-box-form">
          <div className="user-box ">
            <div className="img-form">
              <img src={owais} alt="" />
            </div>
            <div className="name-form">
              <span>
                Muhammad Owais
              </span>
            </div>
          </div>
          <hr />
          <div className="form-navbar">
            <ul className='unlist'>
              <li><Link to='/form/info'>Information</Link></li>
              <li className='border-line'></li>
              <li style={{ position: 'relative', right: '25px' }}><Link to='/form/experience'>Experience</Link></li>
            </ul>
          </div>
          <hr />
          <div className="info-exp">
            {
              location.pathname === `${location.pathname === '/form/info' ? '/form/info' : '/form'}` ? <Information /> : <Information /> || location.pathname === '/form/experience' ? <Experience /> : <Information />
            }
          </div>
        </div>
      </div>
    </>


  )
}

export default Form


