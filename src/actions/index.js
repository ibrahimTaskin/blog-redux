import JsonPlaceholder from "../apis/JsonPlaceholder"

export const fetchPosts =  () => {

    const promise =  JsonPlaceholder.get('/posts').then(res => res.data);
    return {
        type:'FETCH_POSTS',
        payload: promise
    }
}