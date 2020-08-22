import React from "react"

import Title from "../Title"
import classes from '../../css/about.module.css'
import Image from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={classes.about}>
      <Title title={"about"} subtitle={"us"}/>
      <div className={classes.aboutCenter}>
        <article className={classes.aboutImg}>
          <div className={classes.imgContainer}>
            <img src={Image} alt="about us"/>
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
