import React from 'react'
import './home.css'
import astro from './astro.png'

const Home = () => {
    return (
        <>
            <div class="bod">
                <section>
                    <div class="image1">
                        <img src={astro} />
                    </div>

                    <div className='sideForm'>
                        <span className='sideFormTitle'>Sign In</span>
                        <form className='loginForm '>
                            <label>Username</label>
                            <input type="text" className='loginInput' placeholder="Enter your email..." />
                            <label>Password</label>
                            <input type="password" className='loginInput' placeholder="Enter your password " />
                            <button className="loginButton" type="submit">Login</button>
                        </form>
                        {/* <button className="loginRegisterButton"><Link to='/register' className="link">Register</Link></button> */}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home