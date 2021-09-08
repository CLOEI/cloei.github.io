import GUIContainer from "./GUIContainer";
import GUIHeader from "./GUIHeader";
import classes from "./styles/Aboutme.module.css";
function Aboutme() {
	return (
		<GUIContainer
			style={{
				position: "absolute",
				height: "60%",
				width: "80vw",
				top: "50%",
				right: "50%",
				transform: "translate(50%, -50%)",
				boxShadow: "0px 4px 4px 4px #00000040",
				maxWidth: "500px",
			}}
		>
			<GUIHeader text="About me" />
			<div class={classes.container}>
				<div className={classes.circle}>
					<div></div>
				</div>
				<div className={classes.text}>
					<p>Helloooooooooooooooooooooooo</p>
				</div>
			</div>
		</GUIContainer>
	);
}

export default Aboutme;
