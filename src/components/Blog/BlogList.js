import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import classes from "../../css/blog.module.css"
import BlogCard from "./BlogCard"
import Title from "../Title"

const getPosts = graphql`
query {
  posts: allContentfulPost(sort: {fields: published, order: DESC}) {
    edges {
      node {
        published(formatString: "MMMM Do, YYYY"),
        title,
        slug,
        id: contentful_id,
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const BlogList = () => {
  const {posts: {edges}} = useStaticQuery(getPosts);
  return (
    <section className={classes.blog}>
      <Title title={"our"} subtitle={"blogs"}/>
      <div className={classes.center}>
        {edges.map((i, ind) => (
          <BlogCard key={ind} blog={i}/>
        ))}
      </div>
    </section>
  )
}

export default BlogList
