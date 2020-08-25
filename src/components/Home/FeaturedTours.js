import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import classes from "../../css/items.module.css"
import Tour from "../Tours/Tour"
import Title from "../Title"

const getData = graphql`
  query {
  featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        name
        price
        slug
        country
        contentful_id
        days
        images {
          fluid {
             ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const FeaturedTours = () => {

  const data = useStaticQuery(getData);
  const tours = data.featuredTours.edges;

  return (
    <section className={classes.tours}>
      <Title title={"featured"} subtitle={"tours"}/>
      <div className={classes.center}>
        {tours.map(node => (
          <Tour
            key={node.contentful_id}
            {...node}
          />
        ))}
      </div>
      <AniLink fade to={"/tours"} className={"btn-primary"}>
        All tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
