import React, { useState } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import classes from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/all"
import links from "../Constants/links"
import socialIcons from "../Constants/social-icons"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <nav>
      <div className={classes.navCenter}>

        <div className={classes.navHeader}>
          <img src={logo} alt="logo"/>
          <button
            type={"button"}
            className={classes.logoBtn}
            onClick={openHandler}>
            <FaAlignRight className={classes.logoIcon}/>
          </button>
        </div>

        <ul
          className={isOpen ? `${classes.navLinks} ${classes.showNav}` : classes.navLinks}>
          {links.map((item, ind) => {
            return <li key={ind}>
              <AniLink fade to={item.path}>
                {item.text}
              </AniLink>
            </li>
          })}
        </ul>

        <div className={classes.navSocialLinks}>
          {socialIcons.map((i, ind) => {
            return <div key={ind}>
              <a
                href={i.url}
                target={"_blank"}
                rel="noreferrer"
              >
                {i.icon}
              </a>
            </div>
          })}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
