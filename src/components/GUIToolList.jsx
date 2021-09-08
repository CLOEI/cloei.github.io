import classes from "./styles/GUIToolList.module.css";

function GUIToolList() {
	return (
		<div className={classes.container}>
			<p>
				<span>F</span>ile
			</p>
			<p>
				<span>E</span>dit
			</p>
			<p>
				<span>V</span>iew
			</p>
			<p>
				<span>G</span>o
			</p>
			<p>
				<span>F</span>avorites
			</p>
			<p>
				<span>H</span>elp
			</p>
		</div>
	);
}

export default GUIToolList;
