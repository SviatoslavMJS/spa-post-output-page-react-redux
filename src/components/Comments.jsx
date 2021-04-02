import AddComment from "./AddComment";
import Comment from "./Comment";
import s from "./Comments.module.css";


const Comments = () => {

    return (
        <div className={s.container}> COMMENTS
           
            <div className={s.header}>
                <button>ADD COMMENT</button>
                <AddComment />
            </div>
            <Comment />

        </div>
    )
}

export default Comments;