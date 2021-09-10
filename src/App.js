import Header from "./components/Header";
import GUIContainer from "./components/GUIContainer";
import GUIHeader from "./components/GUIHeader";
import GUIToolList from "./components/GUIToolList";
import FirstItem from "./components/FirstItem";
import { useState } from "react";
import Aboutme from "./components/Aboutme";

function App() {
	const [GUI, setGUI] = useState({
		openedGUI: {
			about_me: false,
			project_list: false,
			contact: false,
		},
		listOfGUI: [],
	});

	function openGUI(name) {
		const copy = { ...GUI };
		copy.openedGUI[name] = true;
		if (!copy.listOfGUI.includes(name)) {
			copy.listOfGUI.push(name);
		}

		setGUI(copy);
	}

	return (
		<>
			<Header />
			<GUIContainer class="flex flex-col bg-white h-80v shadow-xl sm:max-w-90v sm:mx-auto max-w-[100px]">
				<GUIHeader title="C:/system32/Cendy.exe" />
				<GUIToolList />
				<FirstItem openGUI={openGUI} />
			</GUIContainer>
			{GUI.openedGUI.about_me && <Aboutme />}
		</>
	);
}

export default App;
