import React from 'react'
import './Form.css'
import owais from '../../images/owaiis.jpg'
import { Link } from 'react-router-dom'

const Form = () => {
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
              <li><Link to='/'>Information</Link></li>
              <li><Link to='/'>Experience</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>


  )
}

export default Form


