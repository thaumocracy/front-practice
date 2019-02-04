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

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('input-image')
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * width)
    }

  }

  onSubmit = (event) => {

    this.setState({imageUrl:this.state.input})

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response =>  { 
      this.calculateFaceLocation(response)
    })
    .catch(error => console.log(error))
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
