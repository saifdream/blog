import { FILTER_BY_AUTHOR, FILTER_BY_TYPE, SEARCH_BY_TITLE, RESET_BLOG } from "./actionTypes";

export const searchByTitle = (searchTerm) => {
    return {
        type: SEARCH_BY_TITLE,
        payload: searchTerm,
    };
};

export const filterByAuthor = (author) => {
    return {
        type: FILTER_BY_AUTHOR,
        payload: author,
    };
};

export const filterByType = (blogType) => {
    return {
        type: FILTER_BY_TYPE,
        payload: blogType,
    };
};

export const resetBlog = () => {
    return {
        type: RESET_BLOG,
    };
};
