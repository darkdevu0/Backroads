import React from "react"
import {StaticQuery, graphql} from "gatsby"

const getSiteData = graphql`
     {
  site {
    siteMetadata {
      title,
      description,
      author,
      data {
        name
        age
      }
    }
  }
}
  `

const RegularHeader = () => {
  return (
    <StaticQuery query={getSiteData} render={(data) => {
      {
        console.log(data);
        return <h1>Hello</h1>
      }
    }}/>
  )
}

export default RegularHeader
