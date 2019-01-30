import React from 'react';
import Slick from 'react-slick';
import './slider.css';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    let template = null;

    switch(props.type){
        case('featured'):
            template = props.data.map( (item,i) => {
                return(
                    <div key={i}>
                        <div className="slider-featured">
                            <div className="slider-featured_image" 
                            style={{
                                background: `url(../images/articles/${item.image})`
                            }}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="slider-featured_caption">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
        template = null;
    }

    return (
        <Slick {...settings}>
        {template}
        </Slick>
    );
};

export default SliderTemplates;