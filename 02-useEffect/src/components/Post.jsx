import { useEffect, useState } from "react";

const Post = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<h1>Post Title Information</h1>
			<ul>
				{data.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};
export default Post;
