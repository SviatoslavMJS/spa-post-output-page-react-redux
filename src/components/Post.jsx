import { changePostId, changeSelectedPostStatusA } from "../redux/postsPage-reducer";
import s from "./Post.module.css";

const Post = (props) => {
  function handleClick(id) {
    props.dispatch(changeSelectedPostStatusA(true));
    props.dispatch(changePostId(id))
  };
  let post = props.post;

  return (
    // <NavLink to={`/post/${post.id}`} >
    <div className={s.container} onClick={() => { handleClick(post.id); }}>
      <div className={s.name}>{props.name}</div>
      <div className={s.title}>{`${post.id} ${post.title}`}</div>
      <div className={s.text}>{post.body}</div>
      <div className={s.counter}>{`Comments ${props.count}`}</div>
    </div>
    // </NavLink>
  )
}

export default Post;