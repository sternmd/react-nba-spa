import React, { Component } from 'react';
import './videosList.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () => {
        return this.props.title ? 
        <h3><strong>NBA</strong> Videos</h3>
        : null
    }

    componentWillMount() {
      this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
      if (this.state.teams.length < 1){
        axios.get(`${URL}/teams`)
        .then( response => {
          this.setState({
            teams: response.data
          })
        })
      }

      axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then( response => {
        this.setState({
          videos: [...this.state.videos, ...response.data]
        })
      })
    }

    renderVideos = () => {
      let template = null;

      switch(this.props.type){
        case('card'):
        template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
          break;
        default:
          template= null
      }
      return template;
    }

    loadMore = () => {
        
    }

    renderButton = () => {
        return this.props.loadmore ? 
        <Button 
        type="loadmore"
        loadmore={()=> this.loadMore()}
        cta="Load More Videos"
        />
        :
        <Button type="linkTo" cta="More videos" linkTo="/videos" />
    }

  render() {
    return (
      <div className="videosList-wrapper">
        { this.renderTitle() }
        { this.renderVideos() }
        { this.renderButton() }
      </div>
    )
  }
}

export default VideosList;