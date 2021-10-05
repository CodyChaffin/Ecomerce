import React from 'react'
import Filter from './Filter'
import Category from './Category'



const Header = ({searchItems, setSearchItems, handleSubmit, setSortItems, setFilterCategory}) => {
  
    return (
        <>
            <div className='header'>
                <span className='logo-box'>
                    <img className='logo' 
                        src='https://api.freelogodesign.org/files/a9937c4a4c67418ea7258124da536628/thumb/logo_200x200.png?v=637689639850000000' 
                        alt='logo'
                    />
                    StoreName
                </span>
            
                <Filter 
                    searchItems={searchItems} 
                    setSearchItems={setSearchItems}
                    handleSubmit={handleSubmit}
                    setSortItems={setSortItems}
                />  
                <span className='cart'>
                🛒 
                </span>   
                
            </div>
            <div className='main-top'></div>
            <Category setSortItems={setSortItems}
                     setFilterCategory={setFilterCategory}/>
        </>
    )
}

export default Header
