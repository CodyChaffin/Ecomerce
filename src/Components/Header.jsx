import React from 'react'
import Filter from './Filter'

const Header = ({searchItems, setSearchItems, handleSubmit}) => {
    return (
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
            />  
            <span className='cart'>
             🛒 
            </span>   
        </div>
    )
}

export default Header
