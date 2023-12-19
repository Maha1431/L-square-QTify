import React from 'react';
import logo from "../assets/logo.png"
import styles from "./Navbar.module.css"
import {ReactComponent as SearchIcon} from "../assets/Search icon.svg"



function Navbar()
{
    return(
        <div className={styles.container}>
         <img src={logo} alt='Qtify-logo' className={styles.logo} />
         <form className={styles.form}>
         <input type='text' placeholder='Search a song of your choice' className={styles.text} />
         <button className={styles.icon} type='submit'><SearchIcon /></button>
         </form>
         <button className={styles.button}>Give Feedback</button>
        </div>
    )
}
export default Navbar;