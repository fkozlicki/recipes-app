// Hooks
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { createPost, updatePost } from "../../actions/posts";
// FileBase
import FileBase from "react-file-base64";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
// Styles
import styles from "./Form.module.css";

const Form = ({ currentId, setCurrentId, open, setOpen }) => {
	const [error, setError] = useState("");
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		recipe: "",
		tags: "",
		selectedFile: "",
	});

	const post = useSelector((state) =>
		currentId ? state.posts.find((p) => p._id === currentId) : 0
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const clear = () => {
		setPostData({
			creator: "",
			title: "",
			recipe: "",
			tags: "",
			selectedFile: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (
			!postData.creator ||
			!postData.title ||
			!postData.recipe ||
			!postData.tags ||
			!postData.selectedFile
		) {
			setError("Fill all fields!");
			return;
		}

		if (currentId === 0) {
			dispatch(createPost(postData));
		} else {
			dispatch(updatePost(currentId, postData));
		}
		clear();
	};

	const handleClose = () => {
		setError("");
		setCurrentId(0);
		clear();
		setOpen(false);
	};

	return (
		<div className={`${styles.modal}  ${open && styles.open}`}>
			<form
				onSubmit={handleSubmit}
				className={`${styles.form} ${open && styles.openForm}`}
			>
				<h1 className={styles.formTitle}>
					{currentId ? "Editing" : "Creating"} a Recipe
				</h1>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="author">
						Author
					</label>
					<input
						className={styles.input}
						type="text"
						name="creator"
						value={postData.creator}
						onChange={(e) =>
							setPostData({ ...postData, creator: e.target.value })
						}
						id="author"
					/>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="title">
						Title
					</label>
					<input
						className={styles.input}
						type="text"
						name="title"
						value={postData.title}
						onChange={(e) =>
							setPostData({ ...postData, title: e.target.value })
						}
						id="title"
					/>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="recipe">
						Recipe
					</label>
					<textarea
						className={`${styles.input} ${styles.textarea}`}
						type="text"
						name="recipe"
						value={postData.recipe}
						rows="4"
						cols="8"
						onChange={(e) =>
							setPostData({ ...postData, recipe: e.target.value })
						}
						id="recipe"
					/>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="tags">
						Tags
					</label>
					<input
						className={styles.input}
						type="text"
						name="tags"
						value={postData.tags}
						onChange={(e) =>
							setPostData({ ...postData, tags: e.target.value.split(",") })
						}
						id="tags"
					/>
				</div>
				<div>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<div className={styles.btnContainer}>
					<div className={styles.error}>{error}</div>
					<div>
						<button className={styles.formBtn} type="submit">
							<FontAwesomeIcon icon={faCheck} color="#4BB543" />
						</button>
						<button
							className={styles.formBtn}
							type="button"
							onClick={handleClose}
						>
							<FontAwesomeIcon icon={faTimes} color="#c00c00" />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
