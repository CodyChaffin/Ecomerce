import React from 'react'

const CarouselCard2 = ({dealItem, itemAdded}) => {
    return (
        <div className='card-carousel'>
        <img src={dealItem.image} alt={dealItem.name}/>
        <span>
            <h4>${dealItem.price}</h4>
            <p>{dealItem.rating}</p>
        </span>  
        <h3>{dealItem.name}</h3>  
        <button className='addBtn' onClick={()=>{itemAdded(dealItem)}}>Add TO Cart</button>              
    </div>
    )
}

export default CarouselCard2
