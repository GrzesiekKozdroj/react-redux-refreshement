import React, { Component } from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     console.log(this.props)
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res=>{
    //             this.setState({ 
    //                 post:res.data
    //             })
    //             console.log(res.data) 
    //         })
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
    console.log(this.props)
        const post = this.props.post ? 
        (
            <div className='container' key={this.props.post.id}>
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        delete post
                    </button>
                </div>
            </div>
        ) : (
            <h5 className='container'>loading post</h5>
        )
        return (
            <div className='container'>
                {post}
            </div>
            )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    let post = state.posts.find(post => post.id == id)
    //console.log(post, id)
    return {
        post: post
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => { 
            dispatch( deletePost(id) )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)