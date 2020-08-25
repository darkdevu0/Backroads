import React from "react"

import classes from "../../css/contact.module.css"
import Title from "../Title"

const Contact2 = () => {

  return (
    <section className={classes.contact}>
      
      <Title title={"contact"} subtitle={"us"}/>
      <div className={classes.center}>
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <input
              type="text"
              name={"name"}
              id={"name"}
              className={classes.formControl}
              placeholder={"john smith"}
            />
          </div>
          <div>
            <input
              type="email"
              name={"email"}
              id={"email"}
              className={classes.formControl}
              placeholder={"email@email.com"}
            />
          </div>
          <div>
            <textarea
              name={"message"}
              id={"message"}
              rows={10}
              className={classes.formControl}
              placeholder={"hello there"}/>
          </div>
          <div>
            <input type="submit" value={"sumbit here"} className={classes.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact2
