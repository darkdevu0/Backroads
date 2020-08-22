import React from "react"
import { Link } from "gatsby"

import classes from "../css/footer.module.css"
import links from "../Constants/links"
import socialIcons from "../Constants/social-icons"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        {links.map((i, ind) => {
          return <Link
            key={ind}
            to={i.path}
          >{i.text}</Link>
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
