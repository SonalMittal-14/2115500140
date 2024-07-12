import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const product = [
        {
            id:1,
            image:"https://i.pinimg.com/564x/13/d8/f4/13d8f44226ed1f5603425b01f4c61e8c.jpg"

        },
        {
            id:2,
            image:"https://i.pinimg.com/564x/41/77/d3/4177d3322253cfdbdfd85a194895f1fe.jpg"
        },
        {
            id:3,
            image:"https://i.pinimg.com/564x/88/5f/a4/885fa4f2a87ae6f0092ef6a04d80dee0.jpg"
        },
        {
            id:4,
            image:"https://i.pinimg.com/564x/3d/0a/bc/3d0abce2b499b06902462cb7f9fe459e.jpg"
        }

    ]
  return (
    <div className=' w-full'>
        <Slider className="" {...settings}>
            {
                product.map((item) => {
                    return(
                        <div key={item.id} className='h-[450px] focus:outline-0 '>
                            <img src={item.image} className=' h-[450px]' />

                        </div>
                    )
                })
            }

        </Slider>
    </div>
  )
}

export default Carousel;