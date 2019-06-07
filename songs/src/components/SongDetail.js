import React from 'react';

import {connect} from 'react-redux';

class SongDetail extends React.Component {
    render() {
        if(this.props.song) {
            return (
                <div>{this.props.song.title}</div>
            )
        }

        return (
            <div>No Song Selected</div>
        )
        
    }

    
}

const mapStateToProps = (state) => {
    console.log(state)
    return {song: state.selectedSong}
}


export default connect(mapStateToProps)(SongDetail);
