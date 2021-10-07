import { Drawer } from "@material-ui/core"
import CartCard from './CartCard'


function Cart({cartOpen, setCartOpen, cartItems, setCartItems}) {
     
    function handleDelete(item){
        const deleteItem = cartItems.filter(cart =>cart.id !== item.id)
        setCartItems(deleteItem)
    }
    return (
        
        <Drawer anchor='right' open={cartOpen} className="Drawer" style={{width:'25%'}} >
         <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
         </span> 
         <ul >
             <h2 style={{color:"blue", marginLeft:"50px", margin:'30px', textAlign:'center'}}>My Cart</h2>
            {cartItems.map(cartItem =><CartCard key={cartItem.id} handleDelete={handleDelete} cartItem={cartItem}/>)} 
         </ul>
        </Drawer>
        
       
    )
}

export default Cart