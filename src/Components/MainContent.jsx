
import React from 'react'
import ItemCard from './ItemCard'

const MainContent = ({showItems, sortItems}) => {
    console.log(showItems)
    const displayProducts = showItems.sort((a,b) => {
        if(sortItems === 'A-Z'){
            return a.category.localeCompare(b.category)
        }else if(sortItems === 'Low'){
            return a.price - b.price
        }else if(sortItems === 'High'){
            return b.price - a.price
        }else if(sortItems === 'All'){
            return showItems
        }else{
            return showItems
        }
    }).map(items => <ItemCard key={items.id} items={items}/>)

    return (
        <>
            <div className='main-top'></div>
            <ul className='cards'>
                {displayProducts}
            </ul>
        </>
    )
}

export default MainContent
