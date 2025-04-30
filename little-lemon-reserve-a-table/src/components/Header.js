import logo from "./../assets/Logo.svg";
import "./../css/Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header>
            <img src={logo} alt="Logo of company"></img>
            <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderOnline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;