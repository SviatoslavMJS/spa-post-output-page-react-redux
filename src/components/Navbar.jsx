import './Navbar.css';
import { changeSelectedPostStatusA } from "../redux/postsPage-reducer";
import store from "../redux/store";
import EditPost from "./EditPost";
import React from "react";


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNewPost: false
        }
    }

    handleClickIO = () => { this.setState({ isNewPost: !this.state.isNewPost }) }

    handleClickCP = () => { store.dispatch(changeSelectedPostStatusA(false)) }

    render() {
        return (
            <div className="aside-elements">
                <div className="filter">FILTER</div>
                <input className="input" type="text" />
                <div className="sort">SORT</div>
                <button onClick={this.handleClickCP}>wiew all posts</button>
                <button onClick={this.handleClickIO} >NEW POST</button>
                {(this.state.isNewPost) ? <div className="newPost"><EditPost /></div> : null}


            </div>)
    }
}

export default Navbar;