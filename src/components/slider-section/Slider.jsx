import React from 'react'
import Item from './Item'
import {slider} from './slider.bd'
import './slider.css'

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <h2 className="slider__title">Отзывы наших студентов</h2>
        <div className="slider__content">
          {slider.map((item, index) => {
            return <Item key={index} item={item}></Item>
          })}
        </div>
      </div>
    </div>
  )
}

export default Slider
