import React from 'react';
import logo from "../assets/logo.png"
import styles from "./Navbar.module.css"
import {ReactComponent as SearchIcon} from "../assets/Search icon.svg"



function Navbar()
{
    return(
        <div className={styles.container}>
         <div className={styles.logocontainer}>
         <img src={logo} alt='Qtify-logo' className={styles.logo} />
         <span className={styles.logotext}>Q tify</span>
         </div>
         <form className={styles.form}>
         <input type='text' placeholder='Search a song of your choice' className={styles.text} />
         <button className={styles.icon}><SearchIcon /></button>
         </form>
         <button className={styles.button}>Give Feedback</button>
        </div>
    )
}
export default Navbar;