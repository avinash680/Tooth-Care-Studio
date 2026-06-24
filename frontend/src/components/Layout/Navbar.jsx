import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
     {name: "Blog", path: "/blog"},
     {name: "Testimonials", path:"/testimonials"},
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
   
    
    
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
       {/* Logo */}
<NavLink to="/" className="logo-container">
  <img
    src="/media/toothcarestudio-logo.png"
    alt="Tooth Care Studio"
    className="logo"
  />

  <div className="logo-text">
    <span>TOOTH CARE</span>
    <span>STUDIO</span>
  </div>
</NavLink>
        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Book Appointment Button */}
        <div className="appointment">
          <NavLink
            to="/book_appointment"
            className="appointment-btn"
          >
            Book Appointment
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}

        <li className="mobile-cta">
          <NavLink
            to="/book_appointment"
            className="appointment-btn"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;


