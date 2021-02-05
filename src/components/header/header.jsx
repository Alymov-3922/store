import React from 'react'
import css from './header.module.css'
import basket from './../../images/shopping-cart.png'
import logo from './../../images/logo-shanel.jpg'

const Header = () => {
    return <div className={`${css.wrapper} wrapper`}>
        <div className={css.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={css.menu}>
            <div className={css.items}>Главная</div>
            <div className={css.items}>Категории</div>
            <div className={css.items}>Популярные</div>
            <div className={css.items}>Новинки</div>
        </div>
        <div>
            <div className={css.img}>
                <img src={basket} alt="basket"/>
            </div>
        </div>
        <div>SETTINGS</div>
    </div>
}

export default Header