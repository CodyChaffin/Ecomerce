
function CartCard({cartItem, handleDelete}){
    return(
        <div style={{textAlign:'center', margin:'30px', maxWidth:'300px', padding:'20px', backgroundColor:"violet"}}
        className='cartCard'>
            <img style={{width : "200px"}}src={cartItem.image} alt={cartItem.name}/>
            <span>
                <h4>${cartItem.price}</h4>
                <p>{cartItem.rating}</p>
            </span>  
            <h3>{cartItem.name}</h3> 
            <p style={{textAlign:'center', }}>{cartItem.description}</p> 
            <button style={{alignContent:'left'}} onClick={()=>{handleDelete(cartItem)}} style={{backgroundColor:"red"}}>Remove From Cart</button>
        </div>
    )

}
 export default CartCard