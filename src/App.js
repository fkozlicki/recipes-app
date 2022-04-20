import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { Posts, Form, Header } from "./components";

import "./style.css";

const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	if (open) document.body.style.overflow = "hidden";
	else document.body.style.overflow = "initial";

	return (
		<>
			<Header />
			<main>
				<Posts setCurrentId={setCurrentId} setOpen={setOpen} />
				<Form
					currentId={currentId}
					setCurrentId={setCurrentId}
					open={open}
					setOpen={setOpen}
				/>
			</main>
		</>
	);
};

export default App;
