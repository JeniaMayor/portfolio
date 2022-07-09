import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import Register from '../Components/register';
import Login from '../Components/Login';
import Footer from '../Components/Footer';



const LandingPage = () => {
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    return (
        <div className="landingPage">
            <div className="landinPage__box">
                <h1 className='headline'>Welcome To Lorem Dating <br></br>The Place To Find Love </h1>
            </div>
            <div className="buttons">
            <span>Have an account?</span>
                <button className='login-btn' onClick={() => {
                    setShowLogin(!showLogin)
                    if (showRegister === true) { setShowRegister(!showRegister) }
                }}>Login</button>
            </div>

            {showRegister ? <Register showRegister={showRegister} setShowRegister={setShowRegister} /> : <div></div>}
            {showLogin ? <Login /> : <div></div>}

            <h2 className="description">Lorem Dating is the only dating app that matches you on what matters to you.
            You deserve to find who you’re looking for.
            Meet them today!</h2>
            <button className='register-btn' onClick={() => {
                setShowRegister(!showRegister)
                if (showLogin === true) { setShowLogin(!showLogin) }
            }}>JOIN LOREM DATING</button>


            <Footer />




        </div>
    )
}

export default LandingPage