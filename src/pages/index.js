import React from "react"
import {Link} from 'gatsby'
import { setConfig } from 'react-hot-loader'

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

setConfig({
  showReactDomPatchNotification: false
})

export default () => (
  <Layout>

    <SimpleHero>
      <Banner
        title={"continue exploring"}
        info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus."}
      >
        <Link to={"/tours"} className={"btn-white"}>
          explore tours
        </Link>
      </Banner>
    </SimpleHero>

    <About />

    <Services />

  </Layout>
)
