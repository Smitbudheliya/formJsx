import './Header.css';

const Header = () => {


    return (
        <nav>
            <input type="checkbox" id="nav-toggle" />
            <div className="logo">MINZ<strong>CODE</strong></div>
            <ul className="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </label>
        </nav>


    );
};

export default Header;
