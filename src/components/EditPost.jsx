import s from "./EditPost.module.css"

const EditPost = () => {

    return (
        <div className={s.wraper}>
            <div className={s.theme}><input type="text" placeholder="Theme"/></div>
            <div className={s.body}><textarea placeholder="Input text" ></textarea></div>
            <div className={s.btn}><button>SAVE</button></div>
        </div>
    )
}

export default EditPost;