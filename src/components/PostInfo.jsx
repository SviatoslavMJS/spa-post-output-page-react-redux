import EditPost from "./EditPost";
import s from "./PostInfo.module.css";


const PostInfo = () => {
    return (
        <div className={s.container}>
                <div className={s.name}>NAME</div>
                <div className={s.title}>TITLE</div>
                <div className={s.text}>BODY</div>
                <div className={s.footer}>
                <EditPost />
                <button>EDIT POST</button>
                </div>   
            </div>
    )
}

export default PostInfo;