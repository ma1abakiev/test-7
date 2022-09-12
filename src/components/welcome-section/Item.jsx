import React from 'react'

const Item = ({item}) => {
  return(
    <div className="welcome__item">
      <img src={item.img} alt="" className="welcome__img" />
      <p className="welcome__text">{item.text}</p>
    </div>

  )
}

export default Item