import { useEffect, useState } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';


function App() {

  const [showItems, setShowItems] = useState([])
  const [searchItems, setSearchItems] = useState('')
  const [sortItems, setSortItems] = useState('All')
  const [filterCategory, setFilterCategory] = useState('')


  useEffect(()=> {
    fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=> setShowItems(data))
},[])

//filter by search
  const searchedOutput = showItems.filter(item => item.name.toLowerCase().includes(searchItems.toLowerCase()))


// //filter by category
  const selectedCategory = filterCategory ? searchedOutput.filter(itemCategory => itemCategory.category === filterCategory) : [...searchedOutput]
    


  return (
    <div className='app'>
      <Header 
        searchItems={searchItems} 
        setSearchItems={setSearchItems} 
        setSortItems = {setSortItems}
        setFilterCategory={setFilterCategory}
      /> 
      <MainContent 
        showItems={showItems}
        sortItems={sortItems}  
        selectedCategory={selectedCategory}         
      />
    </div>
  );
}

export default App;
