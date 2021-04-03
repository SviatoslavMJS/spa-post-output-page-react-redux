import { combineReducers, createStore } from "redux";
//import commentsReducer from "./comments-reducer";
import postsPageReducer from "./postsPage-reducer";
//import usersReducer from "./users-reducer";


let reducers = combineReducers({
    postsPage: postsPageReducer
    
});

let store = createStore(reducers);


export default store;