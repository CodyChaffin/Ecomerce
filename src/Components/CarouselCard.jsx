// import React, { useEffect, useState } from 'react'


const CarouselCard = ({topItems, itemAdded}) => {
    // const [item, setItem] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(()=>{
    //     fetch(`http://localhost:8000/products/${topItems.id}`)
    //     .then(resp =>resp.json())
    //     .then(item => {
    //         setItem(item)
    //         setIsLoaded(true);
    //     });
    // },[]);

    // if (!isLoaded) return <h2>Loading, Please Wait...</h2>
  

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
