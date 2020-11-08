import React from "react";
import style from "./header.module.css";

const Header = (props) => {
    return (
        <div className={style.container}>
            <div className={style.itemLogo}>Лого</div>
            <nav className={style.itemNav}>
                <a href="111">Главная</a>
                <a href="111">Новости</a>
                <a href="111">Контакты</a>
            </nav>
        </div>
    )


}

export default Header;