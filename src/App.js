
import './App.css';
import Posts from './components/Posts';
import React from 'react';
import Navbar from './components/Navbar';
import SelectedPost from './components/SelectedPost';
import store from './redux/store';



class App extends React.Component {
 
  render() {

    return (
      //<BrowserRouter >
        <div className="app-wraper">
          <div className="header">
            <Navbar />
          </div>

          <div className="content">
            { (store.getState().postsPage.showSelectedPost)
            ? <SelectedPost /> 
            : <Posts store={store}/> }
          </div>
        </div>
     // </BrowserRouter>
    )
  }

}

export default App;
