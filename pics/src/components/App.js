import unsplash from '../api/unsplash'
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './imagelist'


class App extends React.Component {

    state = {images: []};

    //changed this from normal function to arrow function because it was giving error cannot read property setState of undefined. 
    //SO changed it arrow function
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        })

        this.setState({images: response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length }
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}

export default App;