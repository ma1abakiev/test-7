import React from 'react'
import './welcome.css'
import { items } from './welcome.bd'
import Item from './Item'

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <h2 className="welcome__title">Добро пожаловать в Академию будущего ХОД</h2>
        <div className="welcome__content">
          {items.map((item, index) => {
            return <Item key={index} item={item}></Item>
          })}
        </div>
      </div>
    </div>
  )
}
export default Welcome