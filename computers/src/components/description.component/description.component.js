import React from "react";
import style from "./description.module.css";

const Description = (props) => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.miniDescriptionLeft}>120 FPS на ультра настройках</div>
                <img src="RDR.jpg" />
            </div>
            <div className={style.item}>
                <img src="witcher.jpg" />
                <div className={style.miniDescriptionRight}>120 FPS на ультра настройках</div>
            </div>


        </div>
    )
}

export default Description;