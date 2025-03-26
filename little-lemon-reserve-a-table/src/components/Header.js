import logo from "./../assets/Logo.svg";
import "./../css/Header.css";

function Header(){
    return (
        <header>
            <img src={logo} alt="Logo of company"></img>
            <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;