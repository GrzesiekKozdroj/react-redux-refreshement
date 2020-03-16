const initState = {
    posts:[],
    todos:[]
}
const rootReducer = (state = initState, action) => {
    if(action.type==='LOAD_POSTS'){
        return{
            ...state,
            posts: action.post
        }
    }
    if(action.type==='DELETE_POST'){
        let newPosts = state.posts.filter(post=>post.id !== action.id)
        return {
            ...state,
            posts:newPosts
        }
    }
    return state;
}
export default rootReducer