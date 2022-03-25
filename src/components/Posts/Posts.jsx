import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Loader from "../Loader/Loader";

import styles from "./Posts.module.css";

const Posts = ({ setCurrentId, setOpen }) => {
	const posts = useSelector((state) => state.posts);

	return !posts.length ? (
		<Loader />
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
