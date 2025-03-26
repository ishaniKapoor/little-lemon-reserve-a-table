import {logo} from "./../assets/Logo.svg";
function Header(){
    return (
        <header>
            <img src={logo} alt="Logo of company"></img>
        </header>
    );
};

export default Header;