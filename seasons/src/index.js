import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {

    /* constructor(props) {
        //ceremonial thing, super is called because our component is extending react.component and some amount of 
        //functionality needs to initialized
        super(props);

        //initialize the state object
        //this is the only when we only assignment, and we use setState otherwise to update the state. 
        this.state = { lat: null, errorMessage: '' };


    } */

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //to update state we called setState
                //this method is provided becuase we extend our component with React.Component
                this.setState({ lat: position.coords.latitude })
            },
            (err) => { this.setState({ errorMessage: err.message }) }
        );
    }
    // React says we have to define render method
    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )

    }

    renderContent() {
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>
        }

        return <Spinner message="Please accept location request." />
    }

    componentDidUpdate() {
        console.log("Componenet did update");
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)