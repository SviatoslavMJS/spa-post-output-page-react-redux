import AddComment from "./AddComment";
import s from "./Comment.module.css"; 


const Comments = () => {

    return(
        <div className={s.container}> COMMENTS

        <div className={s.footer}>
            <AddComment />
            <button>ADD COMMENT</button>
        </div>
            
        </div>
    )
}

export default Comments;