import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/timeline"
              >
                Timeline
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                activeClassName="navbar__link--active"
                to="/page"
              >
                Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
