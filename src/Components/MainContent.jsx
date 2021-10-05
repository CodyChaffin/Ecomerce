
import React from 'react'
import ItemCard from './ItemCard'

const MainContent = ({showItems, sortItems, selectedCategory}) => {
    const displayProducts = selectedCategory.sort((a,b) => {
        if(sortItems === 'A-Z'){
            return a.category.localeCompare(b.category)
        }else if(sortItems === 'Low'){
            return a.price - b.price
        }else if(sortItems === 'High'){
            return b.price - a.price
        }else{
            return selectedCategory
        }
    })
    .map(items => <ItemCard key={items.id} items={items} />)

    return (
        <>
            
            <ul className='cards'>
                {displayProducts}
            </ul>
        </>
    )
}

export default MainContent
