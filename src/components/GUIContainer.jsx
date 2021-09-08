function GUIContainer(props) {
	return (
		<div className="GUIContainer" style={props.style}>
			{props.children}
		</div>
	);
}

export default GUIContainer;
