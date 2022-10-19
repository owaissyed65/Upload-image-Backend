import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const Information = () => {
    return (
        <>
            <div className='form-child-info'>
                <div className="headings"><h2> Personal Details</h2></div>
                <div className="personal-details">
                    <div className='contact'>
                        <span className='span-1'><CallIcon /></span>
                        <span className='span-2'>0316-2794152</span>
                    </div>
                    <div className="address">
                        <span className="span-1"><MyLocationIcon /></span>
                        <span className="span-2">Nazimabad 1 No Karachi</span>
                    </div>
                    <div className="email">
                        <span className="span-1"><EmailIcon /></span>
                        <span className="span-2">owaissyed65@gmail.com</span>
                    </div>
                    <div className="github">
                        <span className="span-1"><GitHubIcon /></span>
                        <span className="span-2">github.com/owaissyed65</span>
                    </div>
                </div>
                <div className="headings"><h2> Education</h2></div>
                <div className="personal-details">
                <div className="subheading"><h5>Intermediate</h5></div>

                </div>
            </div>
        </>
    )
}

export default Information
