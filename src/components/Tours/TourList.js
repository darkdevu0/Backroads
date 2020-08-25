import React, { useState, useEffect } from "react"

import Tour from "./Tour"
import classes from "../../css/items.module.css"

const removeDuplicate = arr => {
  arr = arr.sort((a, b) => (a.name > b.name) ? 1 : -1)
  const newArr = [arr[0]]
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i].node.name !== arr[i - 1].node.name)
      newArr.push(arr[i])
  }
  return newArr
}

const TourList = (props) => {
  const [tours, setTours] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    const arr = removeDuplicate(props.tours.edges)
    setTours(arr)
    setSortedTours(arr)
  }, [])


  return (
    <section className={classes.tours}>
      <div className={classes.center}>
        {tours.map((node, ind) => <Tour
          key={ind}
          {...node}
        />)}
      </div>
    </section>
  )
}

export default TourList
