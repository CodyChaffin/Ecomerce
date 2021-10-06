import { Drawer } from "@material-ui/core"
import CartCard from './CartCard'


function Cart({cartOpen, setCartOpen, cartItems}) {
     
    return (
        <Drawer anchor='right' open={cartOpen} >
         <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
         </span> 
         <ul>
            {cartItems.map(cartItem =><CartCard key={cartItem.id} cartItem={cartItem}/>)} 
         </ul>
        </Drawer>
        
       
    )
}

export default Cart