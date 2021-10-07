import React from 'react'

const CarouselCard = ({newItems, itemAdded}) => {

  

    return (
        
            <div className='card-carousel'>
                <img src={newItems.image} alt={newItems.name}/>
                <span>
                    <h4>${newItems.price}</h4>
                    <p>{newItems.rating}</p>
                </span>  
                <h3>{newItems.name}</h3>
                <button className='addBtn' onClick={()=>{itemAdded(newItems)}}>Add TO Cart</button>               
                 
            </div>
   
    )
}
export default CarouselCard
