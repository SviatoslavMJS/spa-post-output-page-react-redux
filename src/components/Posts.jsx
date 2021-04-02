import Pagination from "./Pagination";
import Post from "./Post";


const Posts = (props) => {

    let state = props.store.getState().postsPage;

    let to = state.postsCount * state.currentPage;
    let from = to - state.postsCount + 1;
    let users = state.users;
    let comments = state.comments;


    let posts = state.posts.map(item => {
        let name;
        let count = 0;
        comments.map(c => (c.postId === item.id) ? count++ : null)
        users.map(i => (i.id === item.userId) ? name = i.name : null )
        return (item.id >= from && item.id <= to)
            ? <Post key={item.id} post={item} name={name} count={count} /> : null
    });

    return (
        <div>
            <div className="Posts">
                {posts}
            </div>
            <Pagination store={props.store} />
        </div>
    )
}

export default Posts;