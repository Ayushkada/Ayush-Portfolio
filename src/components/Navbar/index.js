import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import {NavLink } from 'react-router-dom'
import { faFile} from '@fortawesome/free-solid-svg-icons'

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
            color="#ffffffc4"
            className="anchor-icon"/>
        </a>
        <a
          href="https://github.com/Ayushkada"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#ffffffc4"
            className="anchor-icon"/>
        </a>
        <a
          href="https://drive.google.com/file/d/1wc6q5aToWkDKUT8R3yp2G1PDQ9hNmjzL/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFile}
            color="#ffffffc4"
            className="anchor-icon"/>
        </a>
      </nav>
    </div>
  )
}

export default Navbar