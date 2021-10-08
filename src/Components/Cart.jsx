import { Drawer } from "@material-ui/core"
import CartCard from './CartCard'


function Cart({cartOpen, setCartOpen, cartItems, setCartItems, cartTotal}) {
   
    function handleDelete(item){
        const deleteItem = cartItems.filter(cart =>cart.id !== item.id)
        setCartItems(deleteItem)
    }
    
    
    
    
    return (
        
        <Drawer anchor='right' open={cartOpen} className="Drawer" style={{maxWidth:'240px'}} >
        <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
         </span> <h2 style={{color:"black", marginLeft:"50px", margin:'20px', textAlign:'center'}}>My Cart</h2>
         {cartTotal===0 ? <h2 style={{padding:'50px', color:'orange'}}>Cart Is Empty</h2>: <h2>Total: ${cartTotal} </h2> }
         <ul >
            
            {cartItems.map(cartItem =><CartCard key={cartItem.id} handleDelete={handleDelete} cartItem={cartItem}/>)} 
         </ul>
         
        </Drawer>
        
       
    )
}

export default Cart