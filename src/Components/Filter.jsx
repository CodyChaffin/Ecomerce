import React,{useState} from 'react'

const Filter = ({setSearchItems}) => {

    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchItems(searchValue)
      }

    const onChangeHandler = (e) => { 
        setSearchValue(e.target.value)
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
      
            <input
                type="text"
                id="search"
                placeholder="search products"
                required={true}
                value={searchValue}
                onChange={onChangeHandler}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Filter
