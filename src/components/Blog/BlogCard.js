import React from "react"

import classes from '../../css/blog-card.module.css'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BlogCard = ({blog}) => {
  const {
    slug,
    title,
    image,
    published
  } = blog.node;

  return (
    <article className={classes.blog}>
      <div className={classes.imgContainer}>
        <Img fluid={image.fluid} className={classes.img} alt={"single post"}/>
        <AniLink fade to={`/blog/${slug}`} className={classes.link}>
          read more
        </AniLink>
        <h6 className={classes.date}>{published}</h6>
      </div>
      <div className={classes.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
