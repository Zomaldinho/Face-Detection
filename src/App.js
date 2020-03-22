import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai';
import './App.css';
import 'tachyons'

const app = new Clarifai.App({
  apiKey: '2bc8233733e84741b3af34e67fe5f5b0'
});

const paramsValue = {
particles:{
  number:{
    value: 100,
    density: {
      enable: true,
      value_area: 800,
    }
  }
},
}

class App extends Component {
  constructor(){
    super();
    this.state ={
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('Click')
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <Particles className='particles' params={paramsValue}  />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
