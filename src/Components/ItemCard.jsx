import React from 'react'

const ItemCard = ({items}) => {
    return (
        <div className='card'>
            <img src={items.image} alt={items.category}/>
            <h4>${items.price}</h4>
            <h3>{items.category}</h3>
            
        </div>
    )
}

export default ItemCard
