import React from 'react'

const ItemCard = ({items}) => {
    return (
        <div>
            <h3>{items.category}</h3>
            <p>${items.price}</p>
            <img src={items.image} alt=""/>
        </div>
    )
}

export default ItemCard
