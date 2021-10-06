import React from 'react'


const Category = ({setSortItems, setFilterCategory}) => {
    return (
        <>            
            <ul className='category-bar'>
                <select onChange={e => setSortItems(e.target.value)}>
                    <option value='All'>Sort By</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Low'>Price: Low-high</option>
                    <option value='High'>Price: High-low</option>
                </select>
                <button onClick={(e) => setFilterCategory(e.target.value)} value=''>All</button>
                <button onClick={(e) => setFilterCategory(e.target.value)} value={`Women's`} >Women</button>
                <button onClick={(e) => setFilterCategory(e.target.value)} value={`Men's`}>Men</button>
                <button onClick={(e) => setFilterCategory(e.target.value)} value='Jewelry'>Jewelery</button>
                <button onClick={(e) => setFilterCategory(e.target.value)} value='Shoes'>Shoes</button>
                <button onClick={(e) => setFilterCategory(e.target.value)} value='Hats'>Hats</button>
            </ul>
        </> 
    )
}

export default Category
