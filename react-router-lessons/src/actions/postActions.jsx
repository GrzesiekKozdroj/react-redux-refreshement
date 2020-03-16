export const deletePost = (id) => {
        return {
            type: 'DELETE_POST',
            id: id
        }
    }
    export const loadPosts = (post) => {
        return {
            type: 'LOAD_POSTS',
            post:post
        }
    }