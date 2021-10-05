import React from 'react'

const Filter = ({searchItems, setSearchItems, handleSubmit, setSortItems}) => {
    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <select onChange={(e) => setSortItems(e.target.value)}>
                <option value='All'>All</option>
                <option value='A-Z'>A-Z</option>
                <option value='Low'>Price: Low-high</option>
                <option value='High'>Price: High-low</option>
            </select>
            <input
                type="text"
                id="search"
                placeholder="search products"
                required={true}
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Filter
