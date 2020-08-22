import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import classes from "../css/error.module.css"
import Banner from "../components/Banner"

export default function error() {
  return <Layout>
    <header className={classes.error}>
      <Banner
        title="oops it's a dead end"
      >
        <Link to={"/"} className={"btn-white"}>
          Back to home page
        </Link>
      </Banner>
    </header>
  </Layout>
}
