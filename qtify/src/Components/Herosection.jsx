import React from "react";
import styles from "../Components/Hero.module.css"
import Headphone from "../assets/vibrating-headphone 1.png"


function Herosection()
{
    return(
        <div className={styles.heroContainer}>
            <div >
               <h1>100 Thousand songs, add-free</h1>
               <h1>Over thousands podcast episodes </h1>
            </div>
            <div>
          <img src={Headphone} alt="HeadPhone" className={styles.heroImg} />
          </div>
        </div>
    )
}

export default Herosection;