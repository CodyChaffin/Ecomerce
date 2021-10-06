import { useEffect, useState } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';



function App() {

  const [showItems, setShowItems] = useState([])
  const [searchItems, setSearchItems] = useState('')
  const [sortItems, setSortItems] = useState('All')
  const [filterCategory, setFilterCategory] = useState('')
  const [cartItems,setCartItems] = useState([])


  useEffect(()=> {
    fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=> setShowItems(data))
},[])



//filter by search
  const searchedOutput = showItems.filter(item => item.name.toLowerCase().includes(searchItems.toLowerCase()))


// //filter by category
  const selectedCategory = filterCategory ? searchedOutput.filter(itemCategory => itemCategory.category === filterCategory) : [...searchedOutput]
  
  //adding items to the cart 
  function itemAdded(newCartItem){
    setCartItems((prevCart) => [...prevCart, newCartItem] )
  } 

  return (
    <div className='app'>
      <Header 
        searchItems={searchItems} 
        setSearchItems={setSearchItems} 
        setSortItems = {setSortItems}
        setFilterCategory={setFilterCategory}
        cartItems={cartItems}
      /> 
      <MainContent 
        showItems={showItems}
        sortItems={sortItems}  
        selectedCategory={selectedCategory}
        itemAdded={itemAdded}         
      />
    </div>
  );
}

export default App;
