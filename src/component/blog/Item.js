import { useDispatch } from "react-redux";
import { filterByAuthor, filterByType } from "../../redux/blog/actions";
import './../../App.css';

function Item({blog}) {
    const dispatch = useDispatch();

    const onTypeClickHandler = () => {
        // console.log(blog.type)
        dispatch(filterByType(blog.type));
    }

    const onAuthorClickHandler = () => {
        // console.log(blog.author)
        dispatch(filterByAuthor(blog.author));
    }

    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover cursor"
                    // src={`./assets/features/${blog.id}.jpg`}
                    src={`./assets/features/${blog.feature_img}`}
                    alt={blog.title}
                    onClick={onAuthorClickHandler}
                />
            </div>
            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor"
                            onClick={onTypeClickHandler}
                        >
                            {blog.type}
                        </span>
                    </p>
                    <a href="#" className="block mt-1 text-cursor">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {blog.title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full cursor"
                            // src={`./assets/authors/${blog.id}.jpg`}
                            src={`./assets/authors/${blog.author_img}`}
                            alt={blog.author}
                            onClick={onAuthorClickHandler}
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline cursor"
                            onClick={onAuthorClickHandler}
                        >
                            {blog.author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time datetime="2020-03-16">
                                {blog.date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {Math.floor((Math.random() * 10) + 10)} min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;