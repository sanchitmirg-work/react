import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'Winter';
    } else {
        return lat > 0 ? 'winter' : 'Summmer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <div>{text}</div>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;