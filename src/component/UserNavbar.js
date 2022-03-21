// import { Link } from 'react-router-dom'
import './UserNavbar.css'

function UserNavbar() {
    return (
        <div className='navbar__container'>
            <div className="logo center-row-left">
                <a href="#">LOGO</a>
            </div>
            <div className="nav-links center-row">
                <ul>
                    <li>
                        <a to='/' className='nav-link'>Your Acoount</a>
                        <a to='/' className='nav-link'>Create Blog</a>
                        <a to='/' className='nav-link'>Home</a>
                        <a to='/' className='nav-link'>News</a>
                        <a to='/' className='nav-link'>Business</a>
                        <a to='/' className='nav-link'>Sociology</a>
                        <a to='/' className='nav-link'>Tech</a>
                        <a to='/' className='nav-link'>Economics</a>
                    </li>
                </ul>
            </div>
            <div className="icon-social">
                <span className="icon-search icon">
                    <ion-icon  name="search-outline"></ion-icon>
                </span>
                <span className='icon-facebook icon'><ion-icon size='large' name="logo-facebook"></ion-icon></span>
                <span className='icon-instagram icon'><ion-icon size='large' name="logo-instagram"></ion-icon></span>
                <span className="icon-github icon"> <ion-icon size='large' name="logo-github"></ion-icon></span>
            </div>
        </div>
    )
}

export default UserNavbar