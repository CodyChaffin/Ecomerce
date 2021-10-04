import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

// 'http://api-doc.axesso.de/#api-Amazon-GetProductInformation'

 
function App() {

  const [showItems, setShowItems] = useState([])


  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setShowItems(data))
},[])


  return (
    <div>
      <Header /> 
      <MainContent showItems={showItems}/>
    </div>
  );
}

export default App;
