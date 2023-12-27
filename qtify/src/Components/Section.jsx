import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import Filters from "./filter";

function Section({ title, data, filterSource, type }) {
  const [carouselButton, setCarouselButton] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectFilteridx, setSelectFilteridx] = useState(0);

  const handleCarousel = () => {
    setCarouselButton((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters((prevFilters) => [...prevFilters, ...data]);
      });
    }
  }, []);

  const showFilter = filters.length > 1;
  const cardstoRender = data.filter((card) =>
    showFilter && selectFilteridx !== 0
      ? card.genre.key === filters[selectFilteridx].key
      : card
  );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilter && <h4 onClick={handleCarousel} className={styles.carouseltext}>
          {!carouselButton ? "Collapse All" : "Show All"}
        </h4>}
      </div>
      {showFilter && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectFilteridx={selectFilteridx}
            setSelectFilteridx={setSelectFilteridx}
          />
        </div>
      )}
      {cardstoRender.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardwrapper}>
          {!carouselButton ? (
            <div className={styles.wrapper}>
              {cardstoRender.map((ele) => (
                <Card  data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardstoRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Section;
