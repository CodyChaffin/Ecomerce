import React from 'react'


const ItemCard = ({items}) => {
   
    return (
        <div className='card'>
            <img src={items.image} alt={items.name}/>
            <span>
                <h4>${items.price}</h4>
                <p>{items.rating}</p>
            </span>  
            <h3>{items.name}</h3>  
                  
        </div>
    )
}

export default ItemCard
