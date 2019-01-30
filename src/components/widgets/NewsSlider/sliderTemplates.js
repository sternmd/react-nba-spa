import React from 'react';
import Slick from 'react-slick';

const SliderTemplates = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slick {...settings}>

        </Slick>
    );
};

export default SliderTemplates;