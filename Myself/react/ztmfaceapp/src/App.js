import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import 'tachyons'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import particlesOptions from './particlesOptions';
import keys from './keys.js'

const app = new Clarifai.App({
  apiKey:keys.clarifai  
})

class App extends Component {
  state = {
      input:'',
      imageUrl:''
  }

  onInputChange = (event) => {
    this.setState({
      input:event.target.value
    })
  }

  onSubmit = (event) => {
    console.log(event.target,'click')
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className="particles"
          params={particlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
