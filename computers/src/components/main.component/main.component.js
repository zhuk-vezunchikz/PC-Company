import React from "react";
import style from  "./main.module.css";

const Main = (props) => {
    return (
        <div className={style.container}>
            <div className={style.item}><img src="pc.jpg"/></div>
            <div className={style.item}>
                <div>
                    <h1>Игровой компьютер</h1>
                    <text>- Видеокарта: GTX 1060<br/>
                        - Процессор: Intel Core i5<br/>
                        - Жесткий диск: 1Tb<br/>
                        - Оперативная память: 16Gb</text>
                </div>
                <div>
                    <h3>Лучшее соотношение цены и качества</h3>
                    <button>Получить консультацию</button>
                </div>

            </div>
        </div>
    )


}

export default Main;