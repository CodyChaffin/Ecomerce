import { Drawer } from "@material-ui/core"
import CartCard from './CartCard'


function Cart({cartOpen, setCartOpen, cartItems}) {
     
    return (
        
        <Drawer anchor='right' open={cartOpen} style={{position:"fixed"}} >
         <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
         </span> 
         <ul >
             <h2 style={{color:"blue", marginLeft:"50px", margin:'30px', textAlign:'center'}}>My Cart</h2>
            {cartItems.map(cartItem =><CartCard key={cartItem.id} cartItem={cartItem}/>)} 
         </ul>
        </Drawer>
        
       
    )
}

export default Cart