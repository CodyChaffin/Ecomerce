import React from 'react'
import {Link} from 'react-router-dom'
// import { Route, Switch, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'



const ItemCard = ({items, itemAdded}) => {

   
 
   
    return (
        
                <Link to={`/${items.id}`} className='card'>
                    <img src={items.image} alt={items.name}/>
                    <span>
                        <h4>${items.price}</h4>
                        <p>{items.rating}</p>
                    </span>  
                    <h3>{items.name}</h3>  
                    <button className='addbtn' onClick={()=>{itemAdded(items)}}>Add TO Cart</button>
                </Link> 
            
    )
}

export default ItemCard
