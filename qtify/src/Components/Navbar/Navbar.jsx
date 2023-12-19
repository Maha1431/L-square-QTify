import React from 'react';
import styles from "./Navbar.module.css"
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';



function Navbar()
{
    return(
        <nav className={styles.container}>
        
         <Logo />
         <Search />
         <Button />
        </nav>
    )
}
export default Navbar;