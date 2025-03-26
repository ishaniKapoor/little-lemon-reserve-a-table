import logo from "./../assets/Logo.svg";
import "./../css/Footer.css";

function Footer(){
    return (
        <footer>
            <img src={logo} alt="Logo of company"></img>
            <ul class="footer-ul dn">
                <h3>Doormat Navigation</h3>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
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