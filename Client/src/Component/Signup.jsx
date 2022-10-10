import React from 'react'

const Signup = () => {
    return (
        <>
            <main>
                <div className="shadow">
                    <div className="shadow-box">

                        <h1>SignUp Now</h1>
                        <form >
                            <div className="input ">
                                <input type="text" placeholder='Name...' className='input-group' required={true} minLength={3} />
                                <input type="email" placeholder='Email...' className='input-group' required={true} minLength={8} />
                                <input type="password" placeholder='Password...' className='input-group' required={true} minLength={5} />
                                <input type="password" placeholder='Confirm Password' className='input-group' required={true} minLength={5} />
                            </div>
                            <div className="button">
                                <button className='btn'>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signup
