import React from "react";
import { ReactComponent as SearchIcon } from "../assets/Search icon.svg";
import styles from "./Search.module.css"

function Search()
{
    const handlesubmit=(e) => {
        e.preventDefault();
    }
    return(
        <>
        <form className={styles.form} onSubmit={handlesubmit}>
        <input className={styles.text} type="text" placeholder="Search a song of your choice"/>
        <button className={styles.icon} type="submit"> <SearchIcon /></button>
        </form>
        </>
    )
}
export default Search