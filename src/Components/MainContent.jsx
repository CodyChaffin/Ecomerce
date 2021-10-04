
import React from 'react'
import ItemCard from './ItemCard'

const MainContent = ({showItems}) => {

    const displayProducts = showItems.map(items => <ItemCard key={items.id} items={items}/>)

    return (
        <div>
            {displayProducts}
        </div>
    )
}

export default MainContent
