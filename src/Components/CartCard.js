
function CartCard({cartItem}){
    return(
        <div className='cartCard'>
            <img src={cartItem.image} alt={cartItem.name}/>
            <span>
                <h4>${cartItem.price}</h4>
                <p>{cartItem.rating}</p>
            </span>  
            <h3>{cartItem.name}</h3>  
            {/* <button onClick={()=>{itemAdded(items)}}>Remove from Card</button> */}
        </div>
    )

}
 export default CartCard