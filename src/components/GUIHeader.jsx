import classes from "./styles/GUIHeader.module.css";

function GUIHeader(props) {
	return (
		<div className={classes.container}>
			<p>{props.text}</p>
			<div className={classes.buttons}>
				<button type="button">_</button>
				<button type="button">#</button>
				<button type="button">X</button>
			</div>
		</div>
	);
}

export default GUIHeader;
