import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import classes from "../css/footer.module.css"
import links from "../Constants/links"
import socialIcons from "../Constants/social-icons"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        {links.map((i, ind) => {
          return <AniLink
            key={ind}
            to={i.path}
          >{i.text}</AniLink>
        })}
      </div>

      <div className={classes.icons}>
        {socialIcons.map((i, ind) => {
          return <a
            key={ind}
            href={i.url}
            target="_blank"
            rel="noreferrer"
          >
            {i.icon}
          </a>
        })}
      </div>

      <div className={classes.copyright}>
        copyright &copy; Devashish Shukla
      </div>
    </footer>
  )
}

export default Footer
