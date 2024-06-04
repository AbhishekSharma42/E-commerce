import React, { useContext } from 'react'
import { Context } from '../../Utils/Context';
import Slider from 'react-slick';
import NewArrival from './NewArrival';

const NewArrivalCarousel = () => {


  const { PhoneCrouselCardSize } = useContext(Context)

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
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
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
    <>
      <Slider {...settings}>
        <div>
          <NewArrival thum="https://images.bewakoof.com/t96/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1702362644-3.jpg" />
        </div>
        <div>
          <NewArrival thum="https://images.bewakoof.com/t1080/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1702362633-1.jpg" />
        </div>
        <div>
          <NewArrival thum="https://images.bewakoof.com/t96/men-s-blue-prototype-graphic-printed-oversized-t-shirt-546644-1715257943-1.jpg" />
        </div>
        <div>
          <NewArrival thum="https://images.bewakoof.com/t96/men-s-blue-prototype-graphic-printed-oversized-t-shirt-546644-1715257943-1.jpg" />
        </div>
        <div>
          <NewArrival thum="https://images.bewakoof.com/t96/men-s-black-iron-man-of-war-graphic-printed-t-shirt-220650-1715257656-1.jpg" />
        </div>
        <div>
          <NewArrival thum="https://images.bewakoof.com/original/men-s-black-relax-t-shirt-387407-1655748019-2.jpg" />
        </div>
      </Slider>

    </>
  )
}

export default NewArrivalCarousel
