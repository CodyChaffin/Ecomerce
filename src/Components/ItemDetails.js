

function ItemDetails({items}){
    // const [item, setItem] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)
    // const id = useParams().id

    // useEffect(()=>{
    //     fetch(`http://localhost:8000/products/${id}`)
    //     .then(resp =>resp.json())
    //     .then(item => console.log(item.id)
            
    //     );
    // },[]);
     return (
        <div className='card'>
            <img onClick={()=>console.log("hey")} src={items.image} alt={items.name}/>
            <span>
                <h4>${items.price}</h4>
                <p>{items.rating}</p>
            </span>  
            <h3>{items.name}</h3> 
            <p>{items.description}</p> 
            {/* <button className='addbtn' onClick={()=>{itemAdded(items)}}>Add TO Cart</button> */}
        </div>
     )
}
 
export default ItemDetails