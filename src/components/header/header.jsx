import React from 'react'
import './header.css'
// import basket from './../../images/shoping-cart.png'
import basket from './../../images/shopping-cart.png'
import logo from './../../images/logo_shop.jpg'

const Header = () => {
    return <div className={'header__wrapper wrapper'}>
        <div className={'logo_wrapper'}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={'menu__wrapper'}>
            <div className={'menu__items'}>Главная</div>
            <div className={'menu__items'}>Категории</div>
            <div className={'menu__items'}>Популярные</div>
            <div className={'menu__items'}>Новинки</div>
        </div>
        <div>
            <div className={'img__wrapper'}>
                <img src={basket} alt="basket"/>
            </div>
        </div>
        <div>SETTINGS</div>
    </div>
}

export default Header