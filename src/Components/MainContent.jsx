import React from 'react'
import ItemCard from './ItemCard'
import CarouselCard from './CarouselCard'
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

const MainContent = ({sortItems, selectedCategory}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const displayProducts = [...selectedCategory].sort((a,b) => {
        if(sortItems === 'A-Z'){
            return a.name.localeCompare(b.name)
        }else if(sortItems === 'Low'){
            return a.price - b.price
        }else if(sortItems === 'High'){
            return b.price - a.price
        }else{
            return selectedCategory
        }
    })
    .map(items => <ItemCard key={items.id} items={items} />)

    const displayCarousel1 = selectedCategory.filter(item => item.rating[0] > 4)
                            .map(newItems => <CarouselCard newItems={newItems} key={newItems.id}/>)
    
    return (

        <> 
            <Slider {...settings}>
                {displayCarousel1}
            </Slider>
            <ul className='cards'>
                {displayProducts}
            </ul>
            

        </>
    )
}

export default MainContent
