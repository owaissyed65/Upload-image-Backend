import React, { useContext } from 'react'
import Context from '../UseContext/context';

const Login = () => {
    const context = useContext(Context);
    const { loginSubmit, loginHandleChange, login } = context;
    return (
        <>
            <main>
                <div className="shadow">
                    <div className="shadow-box-login">
                        <h1>Login Now</h1>
                        <form onSubmit={loginSubmit} >
                            <div className="input-login ">
                                <input type="email" placeholder='Email...' className='input-login-group' required={true} minLength={8} name='email' value={login.email} onChange={loginHandleChange} />
                                <input type="password" placeholder='Password...' className='input-login-group' required={true} minLength={5} name='password' value={login.password} onChange={loginHandleChange} />
                            </div>
                            <div className="button">
                                <button className='btn '>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login
