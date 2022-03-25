import styles from "./Loader.module.css";

const Loader = () => (
	<div className={styles.container}>
		<div className={styles.loading}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<p className={styles.text}>Loading</p>
		</div>
	</div>
);

export default Loader;
