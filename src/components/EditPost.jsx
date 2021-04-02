import s from "./EditPost.module.css"

const EditPost = () => {

    return (
        <div className={s.wraper}>
            <input type="text" placeholder="Theme"/>
            <textarea name="body" id="txt" cols="30" rows="10"></textarea>
        </div>
    )
}

export default EditPost;