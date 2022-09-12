import React from 'react'
import './Section.css'
import ownImage from './nav-section.img/own.png'
import { nav } from './nav.db'
import {btn}  from './nav.db'
const Section = () => {
  return (
    <div className="nav-section">
      <div className="nav-before"></div>
      <div className="nav-box">
        <img className="nav-img" src={ownImage} alt="" />
        <p className='nav-txt'>
          Кем вы хотите стать? <br /><br /> <br /> Пора найти себя и выбрать подходящий курс :) <br />  <br />
          Удачи!
        </p>
      </div>
      <div className="intrio">
        {nav.map((item, index) => (
          <div className="box" key={` nav item ${index}`}>
            <img src={item.img} alt="" className="png" />
            <div className="box1">
              <h5 className="box-title">{item.title}</h5>
              <p className="box-age">{item.age}</p>
            </div>
          </div>
        ))} 
      </div>
      <hr />
      <section className="nav-btn">
          {btn.map((item,index) => (
            <div className="btn" key= {` btn item ${index}`}>
              <a className='nav-a' href={item.link}>{item.title}</a>
        </div>
          ))}
          
      </section>
    </div>
  );
}

export default Section