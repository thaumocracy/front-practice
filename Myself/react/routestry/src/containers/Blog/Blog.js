import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import { Route , NavLink , Switch , Redirect} from 'react-router-dom'

import Posts from '../Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from='/' to='/posts'/> */}
                    <Route  render={() => <h3>404 page</h3>} />
                </Switch>

            </div>
        );
    }
}

export default Blog;