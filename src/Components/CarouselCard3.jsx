import {Link} from 'react-router-dom'

const CarouselCard = ({newItems, itemAdded}) => {

  

    return (
        
            <Link to={`/${newItems.id}`}  className='card-carousel link-class'>
                <img src={newItems.image} alt={newItems.name}/>
                <span>
                    <h4>${newItems.price}</h4>
                    <p>{newItems.rating}</p>
                </span>  
                <h3>{newItems.name}</h3>
                <button className='addBtn' onClick={()=>{itemAdded(newItems)}}>Add TO Cart</button>               
                 
            </Link>
   
    )
}
export default CarouselCard
