import React from 'react'

const CarouselCard = ({newItems}) => {

  

    return (
        
            <div className='card-carousel'>
                <img src={newItems.image} alt={newItems.name}/>
                <span>
                    <h4>${newItems.price}</h4>
                    <p>{newItems.rating}</p>
                </span>  
                <h3>{newItems.name}</h3>                
            </div>
   
    )
}
export default CarouselCard
