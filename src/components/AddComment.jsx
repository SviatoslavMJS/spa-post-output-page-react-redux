import s from "./AddComment.module.css"


const AddComment = () => {
    return (
        <div className={s.wraper}>
            <input type="text" placeholder="Enter comment"/>
            <button type="submit">SAVE</button>
        </div>
    )
}

export default AddComment;