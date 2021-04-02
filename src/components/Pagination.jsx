import { nextPageCountA, previousPageCountA } from "../redux/postsPage-reducer";
import s from "./Pagination.module.css"

const Pagination = (props) => {
let store = props.store;
let state = props.store.getState().postsPage;

let prewClick = () => { store.dispatch( previousPageCountA() ) };
let nextClick = () => { store.dispatch( nextPageCountA() )};

    return (
        <div className={s}>
            <div className={s.cont}>
                <button className={s.prev} onClick={ prewClick }>PREV</button>
                <button className={s.curr}>{ state.currentPage }</button>
                <button className={s.next} onClick={ nextClick }>NEXT</button>
            </div>
        </div>
    )
}

export default Pagination;