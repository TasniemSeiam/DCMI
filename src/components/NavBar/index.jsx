import { Link } from "react-scroll"; // For smooth scrolling and active state management
import style from "./style.module.css";
import { useState } from "react";
import { Link as LinkTo } from "react-router-dom";



const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];
const NavBar = () => {


  const [activeLink, setActiveLink] = useState("home");

  const [navbar,setNavbar]= useState(false)
  
  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const changeNavbar = () => { 
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNavbar)

  return (
    <header className={` ${style.header} position-relative`}>
      <nav className= {navbar?` ${style.activeNavBar} ${style.navBar} navbar navbar-expand-lg navbar-light py-3  w-100`:` ${style.navBar} navbar navbar-expand-lg navbar-light py-3 position-absolute  w-100`} >
        <div className="container container-fluid">
          <LinkTo className="navbar-brand" to="/">
            <img src="/images/logo/logo.png" alt="HIBRO" />
          </LinkTo>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${style.navBar}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item pe-3">
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass={style.active}
                    onClick={() => handleSetActive(link.id)}
                  className={`nav-link ${style.navLink} ${
                    activeLink === link.id? style.active : ""
                  }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
