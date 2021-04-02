import EditPost from "./EditPost";
import s from "./PostInfo.module.css";
import React from 'react';
import store from "../redux/store";



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

    

    render() {
        
        return (
            <div className={s.container}>
                <div className={s.name}>NAME</div>
                <div className={s.title}>TITLE</div>
                <div className={s.body}>BODY</div>
                
                <div className={s.footer}>
                    <button onClick={this.handleClickAP}>EDIT POST</button>
                    {(this.state.addPostInput) ? <EditPost /> : null}
                </div>
            </div>
        )
    }
}

export default PostInfo;