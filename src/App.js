import { useEffect, useState } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

// 'http://api-doc.axesso.de/#api-Amazon-GetProductInformation'

 
function App() {

  const [showItems, setShowItems] = useState([])
  const [searchItems, setSearchItems] = useState('')
  const [sortItems, setSortItems] = useState('All')


  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setShowItems(data))
},[])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowItems(showItems.filter(item => item.category.toLowerCase().includes(searchItems.toLowerCase())))
  }





  return (
    <div className='app'>
      <Header 
        searchItems={searchItems} 
        setSearchItems={setSearchItems} 
        handleSubmit={handleSubmit}
        setSortItems = {setSortItems}
      /> 
      <MainContent 
        showItems={showItems}
        sortItems={sortItems}
      />
    </div>
  );
}

export default App;
