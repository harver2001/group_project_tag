import React from 'react'
import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
    const user = false;
    const PF = "localhost:4000/"
    const handleLogout = () => {
        
    }
    return (
        <>
            <div className="top">
                <div className='topLeft'>
                    <h1 className='leftTitle'>Hackingly</h1>
                </div>
                
                <div className='topRight'>
                {
                    user ? (<Link to='/settings'><img src = {PF+user.profilePic} alt = "img" className="topImg" /></Link>):(
                        <ul className='topList'>
                            <li className='topListItem whiteURL'><Link className='link' to="/blogs">Blogs</Link></li>
                            <li className='topListItem'><Link className='link' to="/login"><div className='loginDetail'>Login</div></Link></li>
                        </ul>
                    )
                }
                </div>
            </div>
        </>

    )
}