import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Live1', duration: '4:05'},
        {title: 'Live2', duration: '4:05'},
        {title: 'Live3', duration: '4:05'},
        {title: 'Live4', duration: '4:05'}

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songsReducer: songsReducer,
    selectedSong: selectedSongReducer
})