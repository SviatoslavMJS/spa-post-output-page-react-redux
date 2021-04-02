import EditPost from "./EditPost";
import s from "./PostInfo.module.css";
import React from 'react';


class PostInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addPostInput: false,
            addCommentInput: false
        }
    }

    handleClickAP = () => {
        this.setState({addPostInput: true})
    }

    hendleclick = () => {
        this.setState({addCommentInput: true})
    }

    render() {
        return (
            <div className={s.container}>
                <div className={s.name}>NAME</div>
                <div className={s.title}>TITLE</div>
                <div className={s.body}>BODY</div>
                <div className={s.footer}>

                    <button>EDIT POST</button>
                    <EditPost />
                </div>
            </div>
        )
    }
}

export default PostInfo;