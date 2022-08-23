import { useSelector, useDispatch } from "react-redux";
import { resetBlog } from "../../redux/blog/actions";
import Item from "./Item";

function List() {
	const {list: blogs, filter, search} = useSelector(state=> state.blogs);
	const dispatch = useDispatch();

	const onReset = () => dispatch(resetBlog());

    return (
		<>
			<p
				className="mt-3 text-md text-gray-500"
			>
				Total result: {blogs.length}
				{ (filter || search) && <span style={{float: "right"}}><button onClick={onReset}>Reset</button></span>}
			</p>
			<div
				className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
			>
				{
					blogs && blogs.map((item)=> <Item key={item.id} blog={item} />)
				}
	
				{
					blogs && blogs.length === 0 &&
						<p
							className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
						>
							No item found
						</p>
				}
			</div>
		</>
    )
}

export default List;