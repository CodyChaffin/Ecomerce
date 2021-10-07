import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'


const ItemCard = ({items, itemAdded}) => {
    const [item, setItem] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:8000/products/${items.id}`)
        .then(resp =>resp.json())
        .then(item => {
            setItem(item)
            setIsLoaded(true);
        });
    },[]);

    if (!isLoaded) return <h2>Loading, Please Wait...</h2>
   
    return (
        <Switch>
            <Route path={"/id"}>
                <div className='card'>
                    <img onClick={()=>console.log("hey")} src={items.image} alt={items.name}/>
                    <span>
                        <h4>${items.price}</h4>
                        <p>{items.rating}</p>
                    </span>  
                    <h3>{items.name}</h3>  
                    <button className='addbtn' onClick={()=>{itemAdded(items)}}>Add TO Cart</button>
                </div>
            </Route>
        </Switch>
    )
    
}

export default ItemCard
