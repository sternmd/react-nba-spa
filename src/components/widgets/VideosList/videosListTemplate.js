import React from 'react';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';
import './videosList.css';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => {
        return <Link to={`/videos/${item.id}`} key={i}>
            <div className='videoListItem_wrapper'>
                <div className='videoListItem_left' style={{
                    background: `url(/images/videos/${item.image})`
                }}>
                <div></div>
                </div>
                <div className='videoListItem_right'>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    })
};

export default VideosListTemplate;