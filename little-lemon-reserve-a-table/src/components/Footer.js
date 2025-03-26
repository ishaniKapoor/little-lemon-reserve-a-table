import {logo} from "./../assets/Logo.svg";

function Footer(){
    return (
        <footer>
            <img src={logo} alt="Logo of company"></img>
            <ul>
                <h1>Doormat Navigation</h1>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul>
                <h1>Contact</h1>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
            <ul>
                <h1>Social Media Links</h1>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </footer>
    );
};

export default Footer;