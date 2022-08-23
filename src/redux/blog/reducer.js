import { FILTER_BY_AUTHOR, FILTER_BY_TYPE, SEARCH_BY_TITLE, RESET_BLOG } from "../blog/actionTypes";
import initialState from "../blog/initialState";
import blogData from "../data";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_TITLE:
            return {
                ...state,
                search: true,
                filter: false,
                list: blogData.filter(blog=> blog.title.includes(action.payload))
            };
        
        case FILTER_BY_TYPE:
            return {
                ...state,
                search: false,
                filter: true,
                list: blogData.filter(blog=> blog.type == action.payload)
            };
        
        case FILTER_BY_AUTHOR:
            return {
                ...state,
                search: false,
                filter: true,
                list: blogData.filter(blog=> blog.author == action.payload)
            };

        case RESET_BLOG:
            return {
                ...state,
                search: false,
                filter: false,
                list: [...blogData]
            };
    
        default:
            return state;
    }
}

export default reducer;