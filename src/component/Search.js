import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetBlog, searchByTitle } from '../redux/blog/actions';

let timeoutId;

function Search() {
    const search = useSelector(state=> state.blogs.search);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(search);

    const onSearch = useCallback(text => {
        setSearchTerm(text);
        if(timeoutId) clearTimeout(timeoutId);
        console.log(timeoutId)
        if(text)
            timeoutId = setTimeout(()=> {
                dispatch(searchByTitle(text));;
            }, 700);
        else
            timeoutId = setTimeout(()=> {
                dispatch(resetBlog());
            }, 700);
    }, []);

    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
            <img
                className="inline h-6 cursor-pointer"
                src="./assets/search.svg"
                alt="Search"
            />
        </div>
    )
}

export default Search;