import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function ItemDetails({itemAdded}){
    
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
        <div className='select-card'>
            <img src={item.image} alt={item.name}/>
             <div className='select-content'>
                <span className='price'>
                    <h4>${item.price}</h4>
                </span>
                <div>
                    <p>{item.rating}</p>
                </div>  
                <div>
                    <h3>{item.name}</h3> 
                    <p>{item.description}</p> 
                </div> 
                <button className='addbtn' onClick={()=>{itemAdded(item)}}>Add TO Cart</button>
            </div>  
        </div>
     )
}
 
export default ItemDetails