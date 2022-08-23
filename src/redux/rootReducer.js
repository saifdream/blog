import { combineReducers } from "redux";
import blogReducer from "./blog/reducer";

const rootReducer = combineReducers({
    blogs: blogReducer,
});

export default rootReducer;