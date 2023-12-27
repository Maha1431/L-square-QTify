import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";


function CarouselRightNavigation()
{
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.isEnding)

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnding(swiper.isEnding)
        })
    },[swiper]);

    return(
        <div className={styles.rightNavigation}>
         {!isEnding && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRightNavigation;