import React from 'react'
import Filter from './Filter'
import Category from './Category'
import Cart from './Cart'
import { useState } from 'react'
import { useHistory} from 'react-router-dom'


const Header = ({ cartTotal, searchItems, setSearchItems, handleSubmit, setSortItems, setFilterCategory, cartItems, setHideItems, setCartItems, setCartTotal}) => {
    const [ cartOpen, setCartOpen ] = useState(false)

    const history = useHistory()

    function handlePageRoute(){
        history.push('./')
    }
     
    function CartWindow(){
        
        return (
            <span onClick={()=>setCartOpen(!cartOpen)} className='cart'>
                🛒 
            </span> 

            
        )
    }
    return (
        <>
            <div className='header'>
                <div onClick={handlePageRoute}>

                <span className='logo-box'>
                    <img className='logo' 
                        src='https://api.freelogodesign.org/files/a9937c4a4c67418ea7258124da536628/thumb/logo_200x200.png?v=637689639850000000' 
                        alt='logo'
                    />
                    <h1>BarGain</h1>
                </span>
                </div>
            
                <Filter 
                    searchItems={searchItems} 
                    setSearchItems={setSearchItems}
                    handleSubmit={handleSubmit}
                    setSortItems={setSortItems}
                />  
                {cartOpen ? <Cart cartTotal={cartTotal} setCartTotal={setCartTotal} cartItems={cartItems} setCartOpen={setCartOpen} cartOpen={cartOpen} setCartItems={setCartItems}/> : CartWindow() }  
                 
                
            </div>
            <div className='main-top'></div>
            <Category setSortItems={setSortItems}
                     setFilterCategory={setFilterCategory}
                     setHideItems={setHideItems}/>
        </>
    )
}

export default Header
