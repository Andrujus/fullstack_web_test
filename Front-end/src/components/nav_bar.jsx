import { Link } from "react-router";
import "../css/nav_bar.css"

function NavBar (){
    return <nav className="navbar">
    <div className="navbar-brand">
        <Link to="/">Movie App</Link>
    </div>
        <div className="navbar-link">
            <Link to="/" className="navbar-link_h">Home</Link>
            <Link to="/favorites" className="navbar-link_f">Favorites</Link>
        </div>
    </nav>
    
}

export default NavBar