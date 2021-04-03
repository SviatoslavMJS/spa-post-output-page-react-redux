import store from "../redux/store";
import Comments from "./Comments";
import PostInfo from "./PostInfo";
import s from "./SelectedPost.module.css"


const SelectedPost = (props) => {
    let store = props.store;

    return (
        <div className={s.wraper}>
            <PostInfo store={store} />
            <Comments store={store} />
           
        </div>
    )
}

export default SelectedPost;