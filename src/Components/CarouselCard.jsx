import React from 'react'

const CarouselCard = ({topItems}) => {

  

    return (
        
            <div className='card-carousel'>
                <img src={topItems.image} alt={topItems.name}/>
                <span>
                    <h4>${topItems.price}</h4>
                    <p>{topItems.rating}</p>
                </span>  
                <h3>{topItems.name}</h3>                
            </div>
   
    )
}
export default CarouselCard
