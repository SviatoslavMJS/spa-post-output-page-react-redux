import { changeSelectedPostStatusA } from "../redux/postsPage-reducer";
import store from "../redux/store";


const Navbar = () => {
    
    let handleClick = ()=>{store.dispatch(changeSelectedPostStatusA())}
    return (
        <div className="aside-elements">
            <div className="filter">FILTER</div>
            <input className="input" type="text" />
            <div className="sort">SORT</div>
            <button onClick={handleClick}>wiew post</button>
            <button>Add Post</button>
        </div>
    )
}

export default Navbar;