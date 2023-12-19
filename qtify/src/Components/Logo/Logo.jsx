import React from "react";
import logo from "../../assets/logo.png"
import styles from "./Logo.module.css"

function Logo()
{
    return  <img src={logo} alt='Qtify-logo' className={styles.logo} />
}
export default Logo;