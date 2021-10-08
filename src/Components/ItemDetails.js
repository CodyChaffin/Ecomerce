import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function ItemDetails(){
    
    const [item, setItem] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

  

    const id = useParams().id
    useEffect(()=>{
        fetch(`http://localhost:8000/products/${id}`)
        .then(resp =>resp.json())
        .then(product => {
            setItem(product)
            setIsLoaded(true);
        });
    },[]);

    if (!isLoaded) return <h2>Loading, Please Wait...</h2>
  
     return (
        <div className='card'>
            <img src={item.image} alt={item.name}/>
            <span>
                <h4>${item.price}</h4>
                <p>{item.rating}</p>
            </span>  
            <h3>{item.name}</h3> 
            <p>{item.description}</p> 
            {/* <button className='addbtn' onClick={()=>{itemAdded(items)}}>Add TO Cart</button> */}
        </div>
     )
}
 
export default ItemDetails