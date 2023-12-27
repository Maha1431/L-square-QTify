import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Components/Herosection";
import styles from "./HomePage.module.css";
import Section from "../Components/Section"
import { fetchFilters } from "../api/api";


function HomePage()
{
  const { data } = useOutletContext();
  const { topAlbums, newAlbums,songs } = data;

  return(
    <div>
        <Hero />
        <div className={styles.wrapper}>
         <Section title="Top Albums" data={topAlbums} type="album"/>
         <Section title="New Albums" data={newAlbums} type="album"/>
         <Section title="Songs" data={songs} filterSource={fetchFilters}  type="songs" />
        </div>
    </div>
  )
}

export default HomePage;