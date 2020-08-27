import React from "react"
import { Link } from "gatsby"
import { setConfig } from "react-hot-loader"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/Home/FeaturedTours"

setConfig({
  showReactDomPatchNotification: false
})

const Home = (props) => {
  return (
    <Layout>

      <StyledHero home img={props.data.fluid.childImageSharp.fluid}>
        <Banner
          title={"continue exploring"}
          info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus."}
        >
          <Link to={"/tours"} className={"btn-white"}>
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About/>
      <Services/>
      <FeaturedTours/>
      </Layout>
  )
}

export const query = graphql`
  query {
  fluid: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
         ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Home
