import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
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
      input: '',
      imageURL: '',
      box: {},
      route: 'home',
      isSignedin: false,
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  boxBoundries = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('hoba');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      topRow: clarifaiFace.top_row * height,
      leftCol: clarifaiFace.left_col * width,
      buttomRow: height - (clarifaiFace.bottom_row * height),
      rightCol: width - (clarifaiFace.right_col * width),
    }
  }

  displayFace = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input})
    console.log('Click')
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFace(this.boxBoundries(response)))
      .catch((err) => console.error(err))
  }

  Routing = (route) => {
    if (route === 'signout'){
      this.setState({isSignedin: false})
    } else if (route === 'home') {
      this.setState({isSignedin: true})    
    }
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.Routing} />
        
        {this.state.route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <Particles className='particles' params={paramsValue}  />
            <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
          </div>
        : ( this.state.route === 'signin' || this.state.route === 'signout'
            ? <Signin onRouteChange={this.Routing}/>
            : <Register onRouteChange={this.Routing} />
          )
       }
      </div>
    );
  }
}

export default App;
