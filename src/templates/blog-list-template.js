import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import classes from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"

const Blog = (props) => {
  const { currentPage, numPages } = props.pageContext;
  const { posts: edges } = props.data;
  return (
    <Layout>
      <section className={classes.blog}>
        <Title title={"latest"} subtitle={"posts"}/>
        <div className={classes.center}>
          {edges.edges.map((i, ind) => (
            <BlogCard key={ind} blog={i}/>
          ))}
        </div>
        <section className={classes.links}>
          {currentPage !== 1  ? <AniLink fade to={`/blogs/${currentPage - 1 === 1 ? '' : currentPage - 1}`} className={classes.link}>Prev</AniLink> : null}
          {Array.from({length: numPages}, (_, i) => {
            return (
              <AniLink fade to={`/blogs/${i !== 0 ? i+1: ''}`} className={i === currentPage - 1 ? `${classes.active} ${classes.link}` : classes.link}>{i+1}</AniLink>
            )
          })}
          {currentPage  !== numPages  ? <AniLink fade to={`/blogs/${currentPage !== 0 ? currentPage+1: ''}`} className={classes.link}>Next</AniLink> : null}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPosts($skip: Int, $limit: Int) {
  posts: allContentfulPost(
    skip: $skip
    limit: $limit
    sort: { fields: published, order: DESC }
  ) {
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

export default Blog
