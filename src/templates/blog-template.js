import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import classes from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json }
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div>
            <h3>this is awesome image</h3>
            <img
              width={"400"}
              src={node.data.target.fields.file["en-US"].url}
              alt="image"/>
          </div>
        )
      }
    }
  }

  return (
    <Layout>
      <section className={classes.blog}>
        <div className={classes.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={classes.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to={"/blog"} className={"btn-primary"}>
            All posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPost($slug: String) {
  post: contentfulPost(slug: { eq: $slug }) {
    title
    published(formatString: "MMMM Do, YYYY"),
    text {
      json
    }
  }
}
`

export default Blog
