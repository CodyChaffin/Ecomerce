import React from 'react'

const CarouselCard2 = ({dealItem}) => {
    return (
        <div className='card-carousel'>
        <img src={dealItem.image} alt={dealItem.name}/>
        <span>
            <h4>${dealItem.price}</h4>
            <p>{dealItem.rating}</p>
        </span>  
        <h3>{dealItem.name}</h3>                
    </div>
    )
}

export default CarouselCard2
