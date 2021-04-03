
let initialState = {
    users: [], 
    posts: [], 
    comments: [] ,
    currentPage: 1,
    postsCount: 3,
    showSelectedPost: false,
    postId: 1,
    currentPost: {}
}

const postsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_USERS:
            return {...state, users: [...action.payload] }

        case UPDATE_POSTS:
            return {...state, posts: [...action.payload]}

        case UPDATE_COMMENTS:
            return {...state, comments: [...action.payload] }

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

        case CHANGE_POST_ID:
            return { ...state, postId: action.payload } 
            
        case SET_CURRENT_POST:
            return { ...state, currentPost: action.payload }

        default: return state;
    }
}

export const updateUsersA = (payload) => {
    return { type: UPDATE_USERS, payload}
};

export const updatePostsA = (payload) => {
    return { type: UPDATE_POSTS, payload }
};

export const updateCommentsA = (payload) => {
    return { type: UPDATE_COMMENTS, payload }
};

export const changeSelectedPostStatusA = (value) => {
    return { type: CHANGE_SEL_POST_STATUS, payload: value }
};

export const nextPageCountA = () => {
    return { type: NEXT_PAGE_COUNT }
}

export const previousPageCountA = () => {
    return { type: PREV_PAGE_COUNT }
}

export const changePostId = (payload) => {
    return { type: CHANGE_POST_ID, payload }
}

export const setCurrentPost = (payload) => {
    return { type: SET_CURRENT_POST, payload }
}

const UPDATE_USERS = "UPDATE_USERS";
const UPDATE_POSTS = "UPDATE_POSTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const CHANGE_SEL_POST_STATUS = "CHANGE_SEL_POST_STATUS";
const NEXT_PAGE_COUNT = "NEXT_PAGE_COUNT";
const PREV_PAGE_COUNT = "PREV_PAGE_COUNT";
const CHANGE_POST_ID = "CHANGE_POST_ID";
const SET_CURRENT_POST = "SET_CURRENT_POST"

export default postsPageReducer;