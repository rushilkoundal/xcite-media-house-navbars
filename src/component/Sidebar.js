import './Sidebar.css'

function Sidebar({ showSidebar, sidebar }) {
    return (
        <div className='sidebar center-row' id={sidebar ? "show" : "hide"}>
            <span className="chevron">
                <ion-icon name="chevron-back-outline" onClick={() => showSidebar(false)}></ion-icon>
            </span>
            <div className="nav">
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
        </div>
    )
}

export default Sidebar