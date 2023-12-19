import React from "react";
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"

function Search()
{
    return(<form className={styles.form}>
         <input type='text' placeholder='Search a song of your choice' className={styles.text} />
         <button className={styles.icon} type='submit'><SearchIcon /></button>
         </form>
    )
}
export default Search;