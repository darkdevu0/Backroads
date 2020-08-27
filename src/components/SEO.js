import React from "react"
import {Helmet} from "react-helmet"
import {graphql, useStaticQuery} from "gatsby"

const getData = graphql`
query {
  site {
    siteMetadata {
      siteTitle: title,
      siteDesc: description,
      author: author,
      siteUrl: siteUrl,
      image
    }
  }
}
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(getData);
  const {siteDesc, siteTitle, siteUrl, image, author} = site.siteMetadata;
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{lang: 'en'}}>
      <meta name={"description"} content={description || siteDesc} />
      <meta name={"image"} content={image} />
      {/*Facebook*/}
      <meta property={"og:url"} content={siteUrl} />
      <meta property={"og:type"} content={"website"} />
      <meta property={"og:title"} content={siteTitle} />
      <meta property={"og:description"} content={siteDesc} />
      <meta property={"og:image"} content={`${siteUrl}/${image}`} />
      <meta property={"og:image:width"} content={"400"} />
      <meta property={"og:image:height"} content={"300"} />
      {/* twitter */}
      <meta name={"twitter:card"} content={"summary_large_image"}/>
      <meta name={"twitter:creator"} content={author}/>
      <meta name={"twitter:title"} content={siteTitle} />
      <meta name={"twitter:description"} content={description} />
      <meta name={"twitter:image"} content={`${siteUrl}/${image}`} />
    </Helmet>
  )
}

export default SEO
