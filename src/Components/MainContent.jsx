import React from 'react'
import ItemCard from './ItemCard'
import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import CarouselCard2 from './CarouselCard2';



const MainContent = ({sortItems, selectedCategory, itemAdded}) => {

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

    .map(items => <ItemCard key={items.id} items={items} itemAdded={itemAdded}/>)

    const displayCarousel1 = selectedCategory.filter(item => item.rating[0] > 4)
                            .map(newItems => <CarouselCard newItems={newItems} key={newItems.id}/>)


    const randomArr = shuffle([...selectedCategory])

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }



    const displayCarousel2 = randomArr.map(dealItem => <CarouselCard2 dealItem={dealItem} key={dealItem.id} itemAdded={itemAdded}/>)
    
    return (

        <> 
            <h3 className='centered'>Top Rated</h3>
            <Slider {...settings} className='carousel'>
                {displayCarousel1}
            </Slider>
            <h3 className='centered'>Hot Deals</h3>
            <Slider {...settings} className='carousel'>
                {displayCarousel2.slice(85)}
            </Slider>
            <h3 className='centered'>New Arrivals</h3>
            <Slider {...settings} className='carousel'>
                {displayCarousel2.slice(93)}
            </Slider>
            <ul className='cards'>
                {displayProducts}
            </ul>
            

        </>
    )
}

export default MainContent
