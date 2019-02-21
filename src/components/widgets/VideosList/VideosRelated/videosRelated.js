import React from 'react';
import '../videosList.css';
import VideosListTemplate from '../videosListTemplate';

const VideosRelated = (props) => (
    <div className="relatedWrapper">
        <VideosListTemplate
        data={props.data}
        teams={props.teams}
        />
    </div>
)

export default VideosRelated;