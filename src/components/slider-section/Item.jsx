import React from "react";



const Item = ({item}) => {
  return(
    <div className="slider__item">
      <div className="slider__box">
        <img src={item.img} alt="" className="slider__img" />
        <div className="slider__minibox">
          <span className="slider__name">{item.name}</span>
          <sub className="slider__prof">{item.prof}</sub>
        </div>
      </div>
      <p className="slider__text">{item.text}</p>
      <div className="slider__end-block">
        <img src={item.star} alt="" />
        <span>{item.grade}</span>
      </div>
    </div>
  )
}

export default Item

