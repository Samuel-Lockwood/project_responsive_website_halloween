import React from 'react'
import "./Items.css"
import { data } from '../../constants'
import CardProducts from '../../components/CardProducts/CardProducts'
const Items = () => {
  return (
    <div className="app__items section__padding" id='items'>
      <div className="app__items_title">
        <h1 className="heading">Select your <br />lost item</h1>
      </div>

      <div className="app__items_card">
        {data.items.map((items, index) => (
          <CardProducts key={items. title + index} urlImg={items.urlImg} title={items.title} tags={items.tags} price={items.price} btn={items.button}/>
        ))}
      </div>
    </div>
  )
}

export default Items