import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="nav-bar">
      <nav>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/favorites" activeStyle>
            Favorites
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Skills and Experiences
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="game" activeStyle>
            Game
          </NavLink>
          <a
            href="https://www.linkedin.com/in/ayush-kadakia-b34557228/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://github.com/Ayushkada"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          </nav>
    </div>
  )
}

export default Navbar