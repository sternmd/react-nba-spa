import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import '../../articles.css';
import Header from './header';

class VideoArticle extends Component {

    state={
        article: [],
        team: []
    }

    componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then( response => {
            let article = response.data[0];

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response => {
                this.setState({
                    article,
                    team: response.data
                })
            })
        })
    }

  render() {
      const article = this.state.article;
      const team = this.state.team;

    return (
      <div>
          <Header teamData={team[0]} />
            <div className="videoWrapper">
                <h1>{article.title}</h1>
            </div>
      </div>
    )
  }
}

export default  VideoArticle;