import ItemCard from './ItemCard'
import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import CarouselCard2 from './CarouselCard2';
import CarouselCard3 from './CarouselCard3';





const MainContent = ({sortItems, selectedCategory, itemAdded, hideItems}) => {

    


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
    }).map(items => <ItemCard key={items.id} items={items} itemAdded={itemAdded}/>)



    const displayCarousel1 = selectedCategory.filter(item => item.rating[0] > 4)
                            .map(topItems => <CarouselCard itemAdded={itemAdded} topItems={topItems} key={topItems.id}/>)


    const randomArr = shuffle([...selectedCategory])

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
 
      
    const displayCarousel2 = randomArr.filter(deals => deals.price > 10 && deals.price <= 20)
        .map(dealItem => <CarouselCard2 dealItem={dealItem} key={dealItem.id} itemAdded={itemAdded}/>)
    const displayCarousel3 = randomArr.map(newItems => <CarouselCard3 newItems={newItems} key={newItems.id} itemAdded={itemAdded}/>)


/////----------------------------------------------Carousel settings    

    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "red" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
      
    //   function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "green" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
      
    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      }
      
    return (
            
        <> 

            <h3 className='centered'>Top Rated</h3>
            <Slider {...settings} className='carousel'>
                {displayCarousel1}
            </Slider>
            <h3 className='centered'>Hot Deals</h3>
            <Slider {...settings} className='carousel'>
                {displayCarousel2}  
               
            </Slider>
            {displayCarousel3.length > 20 ? <h3 className='centered'>New Arrivals</h3> : null}
            <Slider {...settings} className='carousel'>
                {displayCarousel3.slice(94)}
            </Slider>
            <ul className='cards'>
                {hideItems ? displayProducts : null}
            </ul>
            {/* <ItemDetails items={selectedCategory}/> */}
        </>
    )
}

export default MainContent
