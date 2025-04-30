import logo from "./../assets/Logo.svg";
import "./../css/Footer.css";
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <img src={logo} alt="Logo of company"></img>
            <ul class="footer-ul dn">
                <h3>Doormat Navigation</h3>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderOnline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <ul class="footer-ul">
                <h3>Contact</h3>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
            <ul class="footer-ul">
                <h3>Social Media Links</h3>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </footer>
    );
};

export default Footer;