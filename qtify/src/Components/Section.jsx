import React, { useState } from "react";
import Card from "./Card"
import styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";


function Section({title, data, type})
{
  const [carouselButton, setCarouselButton] = useState(true);

 const handleCarousel = () => {
  setCarouselButton((prevState) => !prevState)
 }

  return(
    <div>
    <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handleCarousel} className={styles.carouseltext}>{!carouselButton ? "Collapse All" : "Show All"}</h4>
    </div>
    {data.length === 0 ? (
      <CircularProgress />
    ):(
    <div className={styles.cardwrapper}>
      {!carouselButton ? (
        <div className={styles.wrapper}>
        {data.map((ele) => (
          <Card key={ele.id} data={ele} type={type}/>
        ))}
        </div>
      ): (
        null
        )}
    </div>
    )}
    </div>
  )
}
export default Section;