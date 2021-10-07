import React from 'react'


const Category = ({setSortItems, setFilterCategory,setHideItems}) => {

    const onClickHandler = (e) => {
        setFilterCategory(e.target.value)
        setHideItems(true)
    }
     return (
        <>            
            <ul className='category-bar'>
                <select onChange={e => setSortItems(e.target.value)}>
                    <option value='All'>Sort By</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Low'>Price: Low-high</option>
                    <option value='High'>Price: High-low</option>
                </select>
                {/* <button onClick={(e) => setFilterCategory(e.target.value)} value=''>All</button> */}
                <button onClick={(e) => onClickHandler(e)} value={`Women's`} >Women</button>
                <button onClick={(e) => onClickHandler(e)} value={`Men's`}>Men</button>
                <button onClick={(e) => onClickHandler(e)} value='Jewelry'>Jewelery</button>
                <button onClick={(e) => onClickHandler(e)} value='Shoes'>Shoes</button>
                <button onClick={(e) => onClickHandler(e)} value='Hats'>Hats</button>
            </ul>
        </> 
    )
}

export default Category
