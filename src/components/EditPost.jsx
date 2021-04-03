import { previousPageCountA } from "../redux/postsPage-reducer";
import s from "./EditPost.module.css"

const EditPost = (props) => {

    return (
        <div className={s.wraper}>
            <div className={s.theme}><input type="text" placeholder="Theme" value={props.post.title ? props.post.title : null}/></div>
            <div className={s.body}><textarea value={props.post.body ? props.post.body :null} placeholder="Input text" ></textarea></div>
            <div className={s.btn}><button>SAVE</button></div>
        </div>
    )
}

export default EditPost;