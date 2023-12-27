import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import { useSwiper } from "swiper/react";

export default function CarouselRightNavigation(){
const swiper = useSwiper();
const [isEnd, setIsEnd] = useState(swiper.isEnd);
useEffect(()=>{
swiper.on("slideChange",function(){
    setIsEnd(swiper.isEnd)
});
},[]);

return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>{swiper.slideNext()}}/>}
    </div>
)
}