import logo from "./../assets/Logo.svg";
import "./../css/Header.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage";

function Header(){
    return (
        <header>
            <img src={logo} alt="Logo of company"></img>
            <Router>
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
            <Routes>
                <Route path="/home" element={<h1>Home Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/menu" element={<h1>Menu Page</h1>} />
                <Route path="/orderOnline" element={<h1>Order Online Page</h1>} />
                <Route path="/login" element={<h1>Login Page</h1>} />
                <Route path="/reservations" element={<BookingPage />} />
            </Routes>
            </Router>
        </header>
    );
};

export default Header;