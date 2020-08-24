import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import Img from 'gatsby-image'

import img from '../images/connectBcg.jpeg'

const getImages = graphql`
  query {
    fixed: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fixed(width: 150, height: 150, grayscale: true) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    
    fluid: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }   
}
`

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);

  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Svg</h3>
        <div className={"fluid"}>
          <Img fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  text-transform: uppercase;
  width: 80vw;
  margin: 0 auto 10rem auto;
  justify-content: space-between;
  align-items: center;
  .basic {
    width: 100%;
  }
  .fluid {
    width: 300px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    
    .fluid {
      width: 500px;
    }
    
  }
`

export default Images
