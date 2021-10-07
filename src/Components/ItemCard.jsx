import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



const ItemCard = ({items, itemAdded}) => {
 
   
    return (
        
                <div className='card'>
                    <img onClick={()=>console.log("hey")} src={items.image} alt={items.name}/>
                    <span>
                        <h4>${items.price}</h4>
                        <p>{items.rating}</p>
                    </span>  
                    <h3>{items.name}</h3>  
                    <button className='addbtn' onClick={()=>{itemAdded(items)}}>Add TO Cart</button>
                </div>
            
    )
}

export default ItemCard
