import { useEffect, useState } from "react";
import GUIContainer from "./GUIContainer";
import GUIHeader from "./GUIHeader";

function Aboutme() {
	const [img, setImg] = useState("");

	useEffect(() => {
		fetch("https://api.github.com/users/CLOEI")
			.then((res) => res.json())
			.then((data) => {
				setImg(data.avatar_url);
			});
	}, []);

	return (
		<GUIContainer class="flex flex-col absolute-center w-full h-2/3 bg-white shadow-xl sm:max-w-70v">
			<GUIHeader title="About me" />
			<div className="flex flex-col h-full justify-center items-center sm:flex-row md:flex-col overflow-auto py-2">
				<img
					class="w-full max-w-125p h-auto rounded-full"
					src={img}
					alt="User profile"
				/>
				<p class="p-5">
					Hello as you may have guessed, my name is Cendy and I am still
					improving my abilities and skills as a web developer
				</p>
			</div>
		</GUIContainer>
	);
}

export default Aboutme;
