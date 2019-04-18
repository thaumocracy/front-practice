import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        selectedPostId:null
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const posts = data.slice(0,5)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Fakewinter'
                    }
                })
                this.setState({posts:updatedPosts})
            })
    }

    render () {
        const posts = this.state.posts.map(post => (
            <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
            />
        ))
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;