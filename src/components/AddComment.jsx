import s from "./AddComment.module.css"


const AddComment = () => {
    return (
        <div className={s.wraper}>
            <input type="text" placeholder="Enter comment"/>
        </div>
    )
}

export default AddComment;