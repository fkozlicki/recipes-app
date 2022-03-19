import React, { useState, useEffect } from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import cakeImg from "./images/cake.webp";

const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	const handleCreate = () => {
		setCurrentId(0);
		setOpen(true);
	};

	if (open) document.body.style.overflow = "hidden";
	else document.body.style.overflow = "initial";

	return (
		<>
			<header className="header">
				<h1>Sweet Recipes</h1>
				<img src={cakeImg} alt="" />
			</header>
			<main className="main">
				<div className="add-container">
					<FontAwesomeIcon
						icon={faPlus}
						className="plus"
						onClick={handleCreate}
					/>
				</div>

				<div>
					<Posts setCurrentId={setCurrentId} setOpen={setOpen} />
				</div>
			</main>
			<Form
				currentId={currentId}
				setCurrentId={setCurrentId}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

export default App;
