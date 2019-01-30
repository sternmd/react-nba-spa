import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './newsList.css';

import { URL } from '../../../config';

class NewsList extends Component {
    state= {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    request = (start,end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                items: [...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    renderNews = (type) => {
        let template = null;

        switch(type){
            case('card'):
            template= this.state.items.map((item,i) => {
                return (
                    <CSSTransition
                        classNames={{
                            enter: 'newsList_wrapper',
                            enterActive: 'newsList_wrapper_enter'
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div className="newsList">
                            <div className="newsList_item">
                                <Link to={`/articles/${item.id}`}>
                                <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>

                )
            })
            break;
        default: 
            template = null;
        }
        return template;
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                
                <div onClick={()=> this.loadMore()}>
                    LOAD MORE
                </div>
            </div>
        );
    }
}

export default NewsList;