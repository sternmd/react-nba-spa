import React from 'react';
import FontAwesome from 'react-fontawesome';

import './cardInfo.css';

const CardInfo = (props) => {

    const teamName = (teams, team_id) => {
        let data = teams.find((item) => {
            return item.id === team_id
        });
        if (data) {
            return data.name
        }
    }

    return (
        <div className="cardInfo">
            <span className="cardInfo-team">
                {teamName(props.teams, props.team)}
            </span>
            <span className="cardInfo-date">
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    );
};

export default CardInfo;