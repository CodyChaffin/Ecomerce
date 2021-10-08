import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function ItemDetails({itemAdded}){
    
    const [item, setItem] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [size, setSize] = useState('S')

  

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

    let newPrice;
    function handleSizePrize(){
        if(size === 'S'){
            newPrice = item.price - 3
            return newPrice
        }else if(size === 'L'){
            return item.price + 2
        }else if(size === 'X'){
            return item.price + 2.40
        }else{
            return item.price
        }
    }
  
     return (
        <div className='select-card'>
            <img src={item.image} alt={item.name}/>
             <div className='select-content'>
                 <select className='size-select' onChange={(e) => setSize(e.target.value)}>
                     <option value='S'>Small</option>
                     <option value='M'>Medium</option>
                     <option value='L'>Large</option>
                     <option value='X'>XL</option>
                 </select>

                <span className='price'>
                    
                    <h4>${item.category === "Men's" || item.category === "Women's"? parseInt(handleSizePrize()) : item.price}</h4>
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