import {Link} from 'react-router-dom'


const CarouselCard = ({topItems, itemAdded}) => {
    
    return (
     
            <Link to={`/${topItems.id}`} className='card-carousel link-class'>
                <p className='wrap'>
                    Top Rated     
                </p>
                <img src={topItems.image} alt={topItems.name}/>
                <span>
                    <h4>${topItems.price}</h4>
                    <p>{topItems.rating}</p>
                </span>  
                <h3>{topItems.name}</h3> 
                <button className='addBtn' onClick={()=>{itemAdded(topItems)}}>Add TO Cart</button>               
            </Link>
        
    )
}
export default CarouselCard
