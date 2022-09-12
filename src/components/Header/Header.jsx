import React from 'react'
import '../Header/Header.css'
import logoImage from '../../assests/image/logo.svg'
import loginImage from '../Header/header-img/button-img.svg'
import { menu } from './menu.db'
import geo from './header-img/geo.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <img src={logoImage} alt="" className="logo" />
          <ul className="header-nav">
            {menu.map((item, index) => (
              <li key={`menu item ${index}`}>
                <img src={item.img} alt="" className="1" />
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="header__select">
            <img className="header-select__img" src={geo} alt="" />
            <select name="town" className="header-select">
              <option value="1" className="header__options">
                Дзержинск
              </option>
              <option value="2" className="header__options">
                Нижний Новгород
              </option>
              <option value="3" className="header__options">
                On-line
              </option>
            </select>
          </div>

          <div className="header-button">
            <img src={loginImage} alt="" className="button-img" />
            <a href="/" className="button-login">
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
