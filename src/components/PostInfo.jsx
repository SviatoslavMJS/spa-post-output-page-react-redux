import EditPost from "./EditPost";
import s from "./PostInfo.module.css";
import React from 'react';
import store from "../redux/store";
import { setCurrentPost } from "../redux/postsPage-reducer";
import { getCurrentPost } from "../redux/getFunctions";



class PostInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addPostInput: false,
        }
    }

    handleClickAP = () => {
        this.setState({addPostInput: !this.state.addPostInput})
    }

    componentDidMount() {
        let id = this.props.store.getState().postsPage.postId;
        let urlPost = `https://jsonplaceholder.typicode.com/posts/${id}`;
        getCurrentPost(urlPost,"posts",id)
        .then(obj => this.props.store.dispatch(setCurrentPost(obj)))
        setTimeout(()=>console.log(store.getState().postsPage.currentPost) ,5000) 
    }
   
    

    render() {
       let user = this.props.store.getState().postsPage.currentPost;
        return (
            <div className={s.container}>
                <div className={s.name}>{user.id}</div>
                <div className={s.title}>{user.title}</div>
                <div className={s.body}>{user.body}</div>
                
                <div className={s.footer}>
                    <button onClick={this.handleClickAP}>EDIT POST</button>
                    {(this.state.addPostInput) ? <EditPost post={user}/> : null}
                </div>
            </div>
        )
    }
}

export default PostInfo;