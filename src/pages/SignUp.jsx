import React from 'react'

export default function LogIn() {
    return (
        <div className='logInPage signupToo'>
            <div className='backgrd'>
                <div className="container">
                    <div className="logIn">
                        <div className="logInContainer">
                            <h1>Sign Up</h1>
                            <p>More than <span>15000+</span> authentic customar base</p>
                            <form className='formSection' action="">
                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' placeholder='Enter email...' />
                                </div>
                                <div className="input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' placeholder='Enter full name...' />
                                </div>
                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' placeholder='Enter password...' />
                                </div>
                                <div className="check">
                                    <div className='opt'>
                                        <input type="checkbox" id='check' />
                                        <label htmlFor="check">Remember Me</label>
                                    </div>
                                    <div className="forgot">
                                        <p>Forgot you password?</p>
                                    </div>
                                </div>
                                <button className='btn btn-p'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
