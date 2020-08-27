import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/all"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout/Layout"
import classes from "../css/template.module.css"
import Day from "../components/SingleTour/Day"
import Button from "../examples/Button"
import SEO from "../components/SEO"


export const query = graphql`
    query($slug: String!) {
        tour: contentfulTour(slug: {eq: $slug}) {
          name,
          price,
          country,
          days,
          start(formatString: "dddd MMMM Do, YYYY"),
          description {
            description
          },
          journey {
            day,
            info
          },
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
    }
  `

const Template = ({ data: { tour } }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey
  } = tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <SEO title={"Tour"} />
      <StyledHero img={mainImage.fluid}/>
      <section className={classes.template}>
        <div className={classes.center}>
          <div className={classes.images}>
            {tourImages.map((i, ind) => <Img
              key={ind}
              fluid={i.fluid}
              alt={"single tour"}
              className={classes.image}
            />)}
          </div>
          <h2>{name}</h2>
          <div className={classes.info}>
            <p>
              <FaMoneyBillWave className={classes.icon}/>
              Starting from ${price}
            </p>
            <p>
              <FaMap className={classes.icon}/>
              Country ${country}
            </p>
          </div>
          <h4>Starts on: {start}</h4>
          <h4>Duration: {days} days</h4>
          <p className={classes.desc}>
            {description}
          </p>
          <h2>daily schedule</h2>
          <div className={classes.journey}>
            {journey.map((i, ind) => (
              <Day
                key={ind}
                day={i.day}
                info={i.info}
              />
            ))}
          </div>
          <div>
            <AniLink
              fade
              to={"/tours"}
              className={"btn-primary"}
            >Back to tours
            </AniLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Template
