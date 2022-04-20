import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./Post.module.css";

const Post = ({ post, setCurrentId, setOpen }) => {
	const dispatch = useDispatch();

	const handleEdit = () => {
		setCurrentId(post._id);
		setOpen(true);
	};

	return (
		<div className={styles.post}>
			<div className={styles.imageContainer}>
				<img
					src={post.selectedFile}
					alt={post.title}
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<p className={styles.postTitle}>{post.title}</p>
				<p className={styles.postContent}>{post.recipe}</p>
				<div className={styles.info}>
					<p>{post.tags.map((tag) => `#${tag} `)}</p>
					<p>
						<span className={styles.author}>Author: </span>
						{post.creator}
					</p>
				</div>
				<div className={styles.buttonsContainer}>
					<button className={styles.btn} onClick={handleEdit}>
						<FontAwesomeIcon icon={faEdit} color="gray" />
					</button>
					<button
						className={styles.btn}
						onClick={() => dispatch(deletePost(post._id))}
					>
						<FontAwesomeIcon icon={faTrash} color="#c93b3be8" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Post;
