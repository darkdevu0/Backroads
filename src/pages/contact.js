import React from "react"
import {graphql} from "gatsby"

import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout/Layout"
import Contact2 from "../components/Contact/Contact2"
import SEO from "../components/SEO"

const Contact = (props) => {
  return <Layout>
    <SEO title={"Contact us"} />
    <StyledHero img={props.data.fluid.childImageSharp.fluid}/>
    <Contact2/>
  </Layout>
}

export const query =  graphql`
  query {
  fluid: file(relativePath: {eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
         ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Contact;
