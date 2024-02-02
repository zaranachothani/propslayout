import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import banner1 from './image/banner1.webp';
import banner2 from './image/banner2.webp'; 
import banner3 from './image/banner3.webp'; 
import banner4 from './image/banner4.webp'; 
import banner5 from './image/banner5.webp'; 
import banner6 from './image/banner6.jpeg'; 
import banner7 from './image/banner7.webp'; 
import banner8 from './image/banner8.webp'; 
import banner9 from './image/banner9.webp'; 
import banner10 from './image/banner10.webp'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const slider = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10];

function Slider(){
    return(
        <>
            <div className="banner">
                <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={3000} autoplaySpeed={2000}>
                    {slider.map((ele, ind) => {
                        return (
                            <div class='item' key={ind}>
                                <img src={ele}></img>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}

export default Slider;