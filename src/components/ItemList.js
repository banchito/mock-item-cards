import React from 'react'
import ItemCard from './ItemCard'

export default function ItemList({items}) {
  console.log(items)
  return (
    <div className="item-list">
      {items.map((item)=>{
        return <ItemCard key={item.id} {...item} /> 
      })}
    </div>
  )
}