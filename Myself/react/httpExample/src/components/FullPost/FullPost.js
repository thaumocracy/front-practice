import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost:null
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(response => response.json())
                .then(data => this.setState({loadedPost:data})) 
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response => console.log(response))
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){ post = <p style={{textAlign:'center'}}>LOADING</p>}

        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post
    }
}

export default FullPost;