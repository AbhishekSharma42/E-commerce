import React, { useContext } from 'react'
import Slider from 'react-slick';
import BestSallingCard from './BestSallingCard';
import { Context } from '../../Utils/Context';

const Carousel = () => {
    const { PhoneCrouselCardSize } = useContext(Context);

    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 100,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: PhoneCrouselCardSize,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div>
                <BestSallingCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg" />
            </div>
            <div>
                <BestSallingCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg" />
            </div>
            <div>
                <BestSallingCard thum="https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg" />
            </div>
            <div>
                <BestSallingCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg" />
            </div>
            <div>
                <BestSallingCard thum="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg" />
            </div>
        </Slider>
    );
}

export default Carousel
