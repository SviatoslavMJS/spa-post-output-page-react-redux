import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import s from "./Comments.module.css";


class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

handleClick = () => {this.setState({isOpen: !this.state.isOpen})}

render() {
    return (
        <div className={s.container}> 
           
            <div className={s.header}>
                <span>COMMENTS</span>
                <button onClick={this.handleClick}>ADD COMMENT</button>
                {(this.state.isOpen) ? <AddComment /> : null}
            </div>
            <Comment />

        </div>
        )
      }
}

export default Comments;