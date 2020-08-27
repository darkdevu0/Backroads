import React from "react"
import {graphql} from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout/Layout"
import BlogList from "../components/Blog/BlogList"

const blog = (props) => {
  return (
    <Layout>
      <StyledHero
        img={props.data.fluid.childImageSharp.fluid}
      />
      <BlogList />
    </Layout>
  )
}

export const query =  graphql`
  query {
  fluid: file(relativePath: {eq: "blogBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
         ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog
