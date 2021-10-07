import { Drawer } from "@material-ui/core"
import CartCard from './CartCard'


function Cart({cartOpen, setCartOpen, cartItems}) {
     
    return (
        
        <Drawer anchor='right' open={cartOpen} style={{width : "100px"}} >
         <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
         </span> 
         <ul style={{width:"30px"}}>
            {cartItems.map(cartItem =><CartCard key={cartItem.id} cartItem={cartItem}/>)} 
         </ul>
        </Drawer>
        
       
    )
}

export default Cart