import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';
// import SeasonDisplay from './SeasonDisplay';

//Extends Pulls in functionality from React.Component
class App extends React.Component {
  //First, but optional method to first initialize state
  //Replaces default React.Component constructor method
  //   constructor(props) {
  //you must call supper(props) within
  // super(props);
  //initialize state with a default latitude
  //only time you do direct assignment, otherwise you setState
  //One way to initialize state
  // this.state = { lat: null, errorMessage: '' };
  //Put what changes state NOT in the render
  //vanilla JS to get position
  //   }
  //Second way to set a constructor and set.State
  state = { lat: null, errorMessage: '' };
  //optional lifecycle method called after constructor
  //Data loading should be in the componentDidMount method
  //fires when component first renders with any state
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //when you get position
      (position) => {
        //setState
        //lat = position.coords.latitude
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //optional lifecycle method called after constructor
  //fires when component updates
  //   componentDidUpdate() {
  //     console.log('My component was just updated - it re-rendered');
  //   }

  //helper function
  renderContent() {
    //conditional rendering
    //if error and no latitude
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    //if no error and we have latitude
    if (!this.state.errorMessage && this.state.lat) {
      //Pass the state latitude into the SeasonsDisplay component as a prop
      return <SeasonDisplay lat={this.state.lat} />;
    }
    //if no error and no latitude
    //this happens when we are waiting for results
    return <Spinner message="Please Allow Geolocation Services" />;
  }

  //Class components must have a render method
  render() {
    //render method returns JSX
    return (
      //call the render content function
      <div className="border black">{this.renderContent()}</div>
    );
  }
}
//Grab the root eliment in the defult html to render in
ReactDOM.render(<App />, document.querySelector('#root'));
