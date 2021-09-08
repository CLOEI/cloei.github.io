import GUIContainer from "./components/GUIContainer";
import GUIHeader from "./components/GUIHeader";
import GUIToolList from "./components/GUIToolList";
import GUIFirstItem from "./components/GUIFirstItem";
import Header from "./components/Header";
import { useState } from "react";
import Aboutme from "./components/Aboutme";

function App() {
	const [GUI, setGUI] = useState({
		showAboutme: false,
		showProjectlist: false,
		showContact: false,
	});

	return (
		<>
			<Header />
			<GUIContainer style={{ height: "82vh" }}>
				<GUIHeader text="C:/system32/Cendy.exe" />
				<GUIToolList />
				<GUIFirstItem />
			</GUIContainer>
			{GUI.showAboutme && <Aboutme />}
		</>
	);
}

export default App;
