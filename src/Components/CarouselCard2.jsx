import { Link } from "react-router-dom"

const CarouselCard2 = ({dealItem, itemAdded}) => {
    return (
        <Link to={`/${dealItem.id}`} className='card-carousel link-class'>
            <img src={dealItem.image} alt={dealItem.name}/>
            <span>
                <h4>${dealItem.price}</h4>
                <p>{dealItem.rating}</p>
            </span>  
            <h3>{dealItem.name}</h3>  
            <button className='addBtn' onClick={()=>{itemAdded(dealItem)}}>Add TO Cart</button>              
        </Link>
    )
}

export default CarouselCard2
