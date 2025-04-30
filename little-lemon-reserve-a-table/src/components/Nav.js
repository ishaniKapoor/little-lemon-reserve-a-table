import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-[#495e57] text-white py-4 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <ul className="flex space-x-6 text-base font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/menu" className="hover:underline">Menu</Link></li>
          <li><Link to="/booking" className="hover:underline">Reservations</Link></li>
          <li><Link to="/order" className="hover:underline">Order Online</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}