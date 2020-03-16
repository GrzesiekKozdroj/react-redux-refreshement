import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import hunter from '../Hunters.png'
import { connect } from 'react-redux'
import {loadPosts} from '../actions/postActions'

class Home extends Component {
    // state= {
    //     posts:[]
    // }
    componentDidMount(){
        if(!this.props.posts.length)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.props.loadPosts(res.data.slice(0,16))
            })
    }
    render() {
        const { posts } = this.props
        const postsList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className='home post card' key={post.id}>
                    <img src={hunter} alt=""/>
                        <div className='card-content'>
                            <Link to={'/' + post.id}>
                                <span className='card-title green-text'>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">
                    Home
            </h4>
                {postsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        loadPosts: (post) => { 
            dispatch( loadPosts(post) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)