import React from 'react';
import VideoList from '../../../widgets/VideosList/videosList';

const VideosMain = () => (
    <VideoList
    type="card"
    loadmore={true}
    start={0}
    amount={10}
    />
)

export default VideosMain;