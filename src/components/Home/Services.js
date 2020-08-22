import React from "react"

import classes from '../../css/services.module.css'
import services from "../../Constants/services"
import Title from "../Title"

const Services = () => {
  return (
    <section className={classes.services}>
      <Title title="our" subtitle="services" />
      <div className={classes.center}>
        {
          services.map((item, ind) => (
            <article className={classes.service} key={ind}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Services
