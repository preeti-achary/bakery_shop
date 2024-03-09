import { pageLinks,socialLinks } from './data';
import React from 'react'

 const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>Bakery shop</h1>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
           return (
            <li key={link.id}>
            <a href={link.href} className="nav-link"> 
            {link.text}
            </a>
          </li>
          );
          })}
          </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const {id,href,icon} = link
            return (
              <li key={id}>
            <a href={href} target="_blank" className="nav-icon"
              ><i className={icon}></i>
          </a>
          </li>
            )
          })}
          
        </ul>
      </div>
      </nav>
  );
  
};

export default Navbar;
