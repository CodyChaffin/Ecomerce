import { useEffect, useState } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ItemDetails from './Components/ItemDetails'
import { Route, Switch } from 'react-router-dom'


function App() {

  const [showItems, setShowItems] = useState([])
  const [searchItems, setSearchItems] = useState('')
  const [sortItems, setSortItems] = useState('All')
  const [filterCategory, setFilterCategory] = useState('')
  const [hideItems, setHideItems] = useState(false) 
  const [cartItems, setCartItems] = useState([])
  const[cartTotal, setCartTotal]= useState([]) 

  useEffect(()=> {
    fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=> setShowItems(data))
},[])

  //adding items to the cart
  function itemAdded(newCartItem){
    setCartItems((prevCart) => [...prevCart, newCartItem] )
  
  }
  //filter by search
  const searchedOutput = showItems.filter(item => item.name.toLowerCase().includes(searchItems.toLowerCase()))


  // //filter by category
  const selectedCategory = filterCategory ? searchedOutput.filter(itemCategory => itemCategory.category === filterCategory) : [...searchedOutput]
    
  function handleClick(id){
      return( <ItemDetails />)
  }    
  
  //cart total price
  useEffect(()=>{
    total();
  }, [cartItems]);

  const total = () => {
    let totalValue = 0;
    for (let i = 0; i <cartItems.length; i++) {
      totalValue += cartItems[i].price
    }
    setCartTotal(totalValue)
  }

  return (
    <div className='app'>
      <Header 
        searchItems={searchItems} 
        setSearchItems={setSearchItems} 
        setSortItems = {setSortItems}
        setFilterCategory={setFilterCategory}
        setHideItems={setHideItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      /> 
      <Switch>     
          <Route path='/:id'>
            <ItemDetails/>
          </Route>
        <Route path='/'>
          <MainContent 
            showItems={showItems}
            sortItems={sortItems}  
            selectedCategory={selectedCategory}
            hideItems={hideItems} 
            itemAdded={itemAdded}    
          
          />    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
