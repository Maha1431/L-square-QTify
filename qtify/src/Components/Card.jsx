import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

function Card({ data, type }) {

  const getCard = (type) => {
    // console.log(data);
    // console.log(type);
    switch (type) {
      case "album": {
        const { image, title, follows, songs, slug } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>

                <div className={styles.titlewrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
       
      }
      case "songs": {
        const { likes, image, title } = data;
        return (
          <div className="{styles.wrapper}">
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes}Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titlewrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
       
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}
export default Card;
