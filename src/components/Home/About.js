import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import classes from "../../css/about.module.css"

const getImage = graphql`
  query {
  fluid: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const About = () => {

  const data = useStaticQuery(getImage)

  return (
    <section className={classes.about}>
      <Title title={"about"} subtitle={"us"}/>
      <div className={classes.aboutCenter}>
        <article className={classes.aboutImg}>
          <div className={classes.imgContainer}>
            <Img
              fluid={data.fluid.childImageSharp.fluid}
              alt="about us"
            />
          </div>
        </article>
        <article className={classes.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nesciunt obcaecati placeat!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nesciunt obcaecati placeat!</p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
