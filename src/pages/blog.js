import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const blog = () => {
  return (
    <Layout>
      hello from blog page<Link to="/">back home</Link>
    </Layout>
  )
}

export default blog
