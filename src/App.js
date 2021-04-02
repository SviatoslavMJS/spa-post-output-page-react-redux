
import './App.css';
import Posts from './components/Posts';
import React from 'react';
import Navbar from './components/Navbar';
import SelectedPost from './components/SelectedPost';
import store from './redux/store';
import { getFromLocal, storeInLocal } from './redux/getFunctions';
import { updateCommentsA, updatePostsA, updateUsersA } from './redux/postsPage-reducer';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPost: 1
    }
  }



  componentWillMount() {

    let state = store.getState().postsPage;
    
    if (state.posts.length === 0) {
      storeInLocal('https://jsonplaceholder.typicode.com/posts', "posts")
    }
    if (state.users.length === 0) {
      storeInLocal('https://jsonplaceholder.typicode.com/users', "users")
    }
    if (state.comments.length === 0) {
      storeInLocal('https://jsonplaceholder.typicode.com/comments', "comments")
    }
    store.dispatch(updatePostsA(getFromLocal("posts")))
    store.dispatch(updateUsersA(getFromLocal("users")))
    store.dispatch(updateCommentsA(getFromLocal("comments")))
    console.log(state.postId)
  }

  render() {
    return (
      //<BrowserRouter >
      <div className="app-wraper">
        <div className="header">
          <Navbar />
        </div>

        <div className="content">
          {(store.getState().postsPage.showSelectedPost)
            ? <SelectedPost store={store} />
            : <Posts store={store} />}
        </div>
      </div>
      // </BrowserRouter>
    )
  }

}

export default App;
