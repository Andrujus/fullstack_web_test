import { Link } from "react-router";

function NavBar (){
    return <nav className="navbar">
    <div className="navbar-brand">
        <Link to="/">Movie App</Link>
    </div>
        <div className="navbar-link">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/favorites" className="navbar-link">Favorites</Link>
        </div>
    </nav>
    
}

export default NavBar