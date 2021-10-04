import React from 'react'

const Filter = ({searchItems, setSearchItems, handleSubmit}) => {
    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <select>
                <option>All</option>
                <option>A-Z</option>
                <option>Price: Low-high</option>
                <option>Price: High-low</option>
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
