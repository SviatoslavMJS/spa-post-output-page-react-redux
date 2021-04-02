import * as axios from "axios";


function getData(url, value) {
    axios.get(url)
        .then(response => response.data)
        .then(json => json.map(item => localStorage.setItem(`${value}/${item.id}`, JSON.stringify(item))))

    let arr = [];
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        } else if (!key.startsWith(value)) {
            continue;
        }
        arr.push(JSON.parse(localStorage.getItem(key)))
    }
    return arr;
};

function storeInLocal(key, value) {
    localStorage.setItem(key, value)
    setTimeout(() => console.log(localStorage.getItem(key)), 1000)
};



let initialState = {
    users: getData('https://jsonplaceholder.typicode.com/users', "users"),
    posts: getData('https://jsonplaceholder.typicode.com/posts', "posts"),
    comments: getData('https://jsonplaceholder.typicode.com/comments', "comments"),
    currentPage: 1,
    postsCount: 3,
    showSelectedPost: false
}




const postsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_USERS:
            return {}

        case UPDATE_POSTS:
            return {}

        case UPDATE_COMMENTS:
            return {}

        case CHANGE_SEL_POST_STATUS:
            return { ...state, showSelectedPost: action.payload }

        case PREV_PAGE_COUNT:
        
           if (state.currentPage > 1) {
               return { ...state, currentPage: state.currentPage - 1 }
            } else return {...state}
      
        case NEXT_PAGE_COUNT:
            let max = Math.ceil(state.posts.length / state.postsCount);

            if (state.currentPage < max) {
                return { ...state, currentPage: state.currentPage + 1 }
            } else return {...state}

        default: return state;
    }
}

export const updateUsersA = () => {
    return { type: UPDATE_USERS }
};

export const updatePostsA = () => {
    return { type: UPDATE_POSTS }
};

export const updateCommentsA = () => {
    return { type: UPDATE_COMMENTS }
};

export const changeSelectedPostStatusA = (value) => {
    return { type: CHANGE_SEL_POST_STATUS, payload: value}
};

export const nextPageCountA= () => {
    return { type: NEXT_PAGE_COUNT }
}

export const previousPageCountA = () => {
    return { type: PREV_PAGE_COUNT }
}

const UPDATE_USERS = "UPDATE_USERS";
const UPDATE_POSTS = "UPDATE_POSTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const CHANGE_SEL_POST_STATUS = "CHANGE_SEL_POST_STATUS";
const NEXT_PAGE_COUNT = "NEXT_PAGE_COUNT";
const PREV_PAGE_COUNT = "PREV_PAGE_COUNT";

export default postsPageReducer;