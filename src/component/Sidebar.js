import './Sidebar.css'

function Sidebar({ showSidebar, sidebar }) {
    return (
        <div className='sidebar' id={sidebar ? "show" : "hide"}>
            <span  className="chevron" >
                <ion-icon name="chevron-back-outline" onClick={() => { showSidebar(false) }}></ion-icon>
            </span>
        </div>
    )
}

export default Sidebar