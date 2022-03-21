import React from 'react'
import './LoginNavbar.css'

function LoginNavbar() {
    return (
        <div className='navbar__container'>
            <div className="logo center-row-left">
                <a href="#">LOGO</a>
            </div>
            <div className="buttons center-row-right">
                <div className="icon-search">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                <button className='btn btn-login'>
                    LogIn
                </button>
                <button className='btn btn-signup'>
                    SignUp
                </button>
            </div>
        </div>
    )
}

export default LoginNavbar