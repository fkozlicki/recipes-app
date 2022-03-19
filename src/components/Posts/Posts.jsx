import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

import styles from "./Posts.module.css";

const Posts = ({ setCurrentId, setOpen }) => {
	const posts = useSelector((state) => state.posts);

	return !posts.length ? (
		<h1>No posts available</h1>
	) : (
		<div className={styles.postsContainer}>
			{posts.map((post, i) => (
				<Post
					post={post}
					key={i}
					setCurrentId={setCurrentId}
					setOpen={setOpen}
				/>
			))}
		</div>
	);
};

export default Posts;
