import React, {useState} from "react"

import {FaAngleDown, FaAngleRight} from "react-icons/all"
import classes from '../../css/day.module.css';

const Day = ({day, info}) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
     setShow(prev => !prev);
  }

  return (
    <article className={classes.day}>
      <h4>
        {day}
        <button
          onClick={showHandler}
          className={classes.btn}>
          {show ? <FaAngleDown/> : <FaAngleRight/>}
        </button>
      </h4>
      {show && <p>{info}</p>}
    </article>
  )
}

export default Day
