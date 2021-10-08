// import React, { useEffect, useState } from 'react'


const CarouselCard = ({topItems, itemAdded}) => {
    
    return (
     
            <div className='card-carousel'>
                <img src={topItems.image} alt={topItems.name}/>
                <span>
                    <h4>${topItems.price}</h4>
                    <p>{topItems.rating}</p>
                </span>  
                <h3>{topItems.name}</h3> 
                <button className='addBtn' onClick={()=>{itemAdded(topItems)}}>Add TO Cart</button>               
            </div>
        
    )
}
export default CarouselCard
