import React from 'react'

const ItemCard = ({items}) => {
    return (
        <div className='card'>
            <img src={items.image} alt={items.category}/>
            <span>
                <h4>${items.price}</h4>
                <p>{items.rating.rate}/5</p>
            </span>  
            <h3>{items.category}</h3>  
                  
        </div>
    )
}

export default ItemCard
