import './ResponsiveNavbar.css'
import { useState } from 'react'
import Sidebar from './Sidebar'

function ResponsiveNavbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = (value) => {
        setSidebar(value)
    }

    const onClick = ()  => {
        setSidebar(true);
    }

    return (
        <div className='navbar__container'>
            <div className="logo center-row-left">
                <a href="#">LOGO</a>
            </div>
            <div className="icon navbar__container-menu center-row">
                <ion-icon onClick={onClick} size='large' name="grid-outline"></ion-icon>
            </div>
            <Sidebar show={showSidebar} sidebar={sidebar}/>
        </div>
    )
}

export default ResponsiveNavbar