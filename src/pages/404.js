import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from "../components/Layout/Layout"
import classes from "../css/error.module.css"
import Banner from "../components/Banner"

export default function error() {
  return <Layout>
    <header className={classes.error}>
      <Banner
        title="oops it's a dead end"
      >
        <AniLink to={"/"} className={"btn-white"}>
          Back to home page
        </AniLink>
      </Banner>
    </header>
  </Layout>
}
