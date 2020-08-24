import React from "react"
import { graphql } from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"

const Component = (props) => {

  return (
    <Layout>
      <StyledHero img={props.data.fluid.childImageSharp.fluid}>
         &nbsp;
      </StyledHero>
    </Layout>
  )
}

export const query =  graphql`
  query {
  fluid: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 4160) {
         ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Component
