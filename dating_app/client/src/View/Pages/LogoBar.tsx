import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Footer from '../Components/Footer';


const LogoBar = () => {
    return (
        <div className='logoBar'>
            <h3 className='logoBar__logo'>Dating website</h3>
            <Outlet/>
            
        </div>
    


    )
}

export default LogoBar