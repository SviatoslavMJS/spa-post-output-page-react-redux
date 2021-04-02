import Comments from "./Comments";
import PostInfo from "./PostInfo";
import s from "./SelectedPost.module.css"


const SelectedPost = () => {

    return (
        <div className={s.wraper}>
            <PostInfo />
            <Comments />
           
        </div>
    )
}

export default SelectedPost;