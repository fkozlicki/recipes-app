import cakeImg from "../../images/cake.webp";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Sweet Recipes</h1>
			<img className={styles.image} src={cakeImg} alt="" />
		</header>
	);
};

export default Header;
