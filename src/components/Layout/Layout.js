import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Pagination from 'rc-pagination';
import {Movies} from "../Movies/Movies";
import Form from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {ChangePage} from "../../store/movie.slice";
import 'rc-pagination/assets/index.css'
import "./layout.css"


const Layout = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const {currentPage, total_pages} = useSelector((state => state.movieReducer));
    console.log(currentPage + " " + total_pages);
    const changePageNumber = (e) => {
        dispatch(ChangePage(e));
    }

    return (
        <div>
            {location.pathname === "/" && <Form/>}
            {location.pathname === "/" && <Movies/>}
            {location.pathname !== "/" && <div>
                <Outlet/>
            </div>}
            {location.pathname === "/" && <Pagination
                className={'rc-pagination'}
                total={total_pages}
                pageSize={20}
                onChange={changePageNumber}
            />}
        </div>
    );
};

export default Layout;