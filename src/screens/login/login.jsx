import React from 'react';
import './login.css';
import astronaut from '../../assets/images/astronaut.png';
import PartitionedDivider from '../../components/partitionedDivider';

const Login = () => {
    return (
        <>
            <div class="bod">
                <section>
                    <div className="loginImage">
                        <img src={astronaut} alt="Astronaut"/>
                    </div>
                    <div className='sideForm'>
                        <span className='sideFormTitle'>Sign In</span>
                        <form className='loginForm '>
                            <label className="formLabel">Username</label>
                            <input type="text" className='formInput' placeholder="Enter mail" />
                            <label className="formLabel">Password</label>
                            <input type="password" className='formInput' placeholder="Enter password" />                                
                            <button className="loginButton" type="submit">Login</button>
                        </form>
                        <div className="resetPassword">
                            <p className="pText">Forgot login details? </p>
                            <button className="textButton">
                                Reset here
                            </button>
                        </div>
                        <PartitionedDivider />
                        <div className="resetPassword">
                            <p className="pText">Don't have an account?</p>
                            <button className="textButton">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;