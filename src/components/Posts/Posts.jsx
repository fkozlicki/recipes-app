import { useSelector } from "react-redux";
// Components
import Post from "./Post/Post";
import Loader from "../Loader/Loader";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Styles
import styles from "./Posts.module.css";

const Posts = ({ setCurrentId, setOpen }) => {
	const posts = useSelector((state) => state.posts);

	const handleCreate = () => {
		setCurrentId(0);
		setOpen(true);
	};

	return !posts.length ? (
		<Loader />
	) : (
		<div className={styles.posts}>
			<button className={styles.add} onClick={handleCreate}>
				Add Recipe
				<FontAwesomeIcon icon={faPlus} />
			</button>

			<div className={styles.grid}>
				{posts.map((post, i) => (
					<Post
						post={post}
						key={i}
						setCurrentId={setCurrentId}
						setOpen={setOpen}
					/>
				))}
			</div>
		</div>
	);
};

export default Posts;
