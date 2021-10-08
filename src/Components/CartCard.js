
function CartCard({cartItem, handleDelete}){
    return(
        <div
        className='cartCard'>
            <img style={{width : "200px"}}src={cartItem.image} alt={cartItem.name}/>
            <span>
                <h4>${cartItem.price}</h4>
                <p>{cartItem.rating}</p>
            </span>  
            <h3>{cartItem.name}</h3> 
            <p style={{textAlign:'center', }}>{cartItem.description}</p> 
            <button className='cartButton' onClick={()=>{handleDelete(cartItem)}}>Remove From Cart</button>
        </div>
    )

}
 export default CartCard