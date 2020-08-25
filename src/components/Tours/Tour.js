import React from "react"
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import classes from '../../css/tour.module.css'
import {FaMap} from "react-icons/all"

const Tour = ({node}) => {
  const {name, price, country, days, slug, images} = node;

  const mainImage = images[0].fluid;

  return (
    <article className={classes.tour}>
      <div className={classes.imgContainer}>
        <Img fluid={mainImage} className={classes.img} alt={"single tour"} />
        <AniLink fade className={classes.link} to={`/tours/${slug}`}>Details</AniLink>
      </div>
      <div className={classes.footer}>
        <h3>{name}</h3>
        <div className={classes.info}>
          <h4 className={classes.country}><FaMap className={classes.icon}/> {country}</h4>
          <div className={classes.details}>
            <h6>{days} DAYS</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
