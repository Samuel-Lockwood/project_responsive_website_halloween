import React from 'react'
import "./Category.css"
import { data } from '../../constants'
import { Card } from "../../components"

const Category = () => {
  return (
    <div className="app__category section__padding">
      <div className="app__category_title">
        <h1 className="heading">Choose your <br /> spooky category</h1>
      </div>

      <div className="app__category_card">
        {data.category.map((category, index) => (
            <Card key={category.title + index} urlImg={category.urlImg} urlImgS={category.urlImgS} title={category.title} tags={category.tags}/>
          ))}
      </div>
    </div>
  )
}

export default Category