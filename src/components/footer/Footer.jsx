import React from 'react'
import './Footer.css'
import logoImage from '../../assests/image/white-logo.svg'
import { kids, children, family, info, main } from './footer.db'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-content">
        <nav className="main">
            <img className='footer-logo' src={logoImage} alt="" />
            <a className='tel' href="tel:+8 800 950-33-98 ">8 800 950-33-98 </a>
            <p className='addres'>г. Москва, ул. Ленина, д.50</p>
            <a className='email' href="mailto:maksatkanybekov2004@gmail.com">info@hodfutureacademy.ru</a>
            <ul  className='footer-ul'>
            {main.map ((item,index) => (
                <li key={`main item ${index}`}>
                     <a href={item.link}> <img src={item.img} alt="" /> </a>
                      </li>        
            ))}
            </ul>
            <p className="copyright">© ХОД, Future Academy</p>
        </nav>
        <nav className="kids">
            <h3>Детям</h3>
            {kids.map ((item, index) =>(
                <a key = {` kids item ${index}}`} href={item.link}>{item.title}</a>
            ))}
        </nav>
        <nav className="children">
            <h3>Подросткам</h3>
            {children.map ((item, index) =>(
                <a key = {` children item ${index}}`} href={item.link}>{item.title}</a>
            ))}
        </nav>
        <nav className="family">
            <h3>Взрослым</h3>
            {family.map ((item, index) =>(
                <a key = {` family item ${index}}`} href={item.link}>{item.title}</a>
            ))}
        </nav>
        <nav className="information">
            <h3>Информация</h3>
            {info.map ((item, index) =>(
                <a key = {` info item ${index}}`} href={item.link}>{item.title}</a>
            ))}
        </nav>
        </div>
    </footer>
  )
}

export default Footer