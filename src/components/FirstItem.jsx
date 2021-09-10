import { ReactComponent as Floppy } from "../assets/floppy.svg";
import { ReactComponent as Harddisk } from "../assets/hard-disk.svg";
import { ReactComponent as Contact } from "../assets/contacts.svg";

function FirstItem({ openGUI }) {
	return (
		<div className="grid flex-1 place-items-center text-center">
			<div className="flex flex-col mx-auto  max-w-max sm:flex-row">
				<div
					onClick={() => openGUI("about_me")}
					className="p-2 hover:bg-blue-200 focus:bg-blue-200 cursor-pointer "
					tabIndex="0"
				>
					<Floppy className="svg-icon" />
					<p>About me</p>
				</div>
				<div
					onClick={() => openGUI("project_list")}
					className="p-2 hover:bg-blue-200 focus:bg-blue-200 cursor-pointer"
					tabIndex="0"
				>
					<Harddisk className="svg-icon" />
					<p>Project list</p>
				</div>
				<div
					onClick={() => openGUI("contact")}
					className="p-2 hover:bg-blue-200 focus:bg-blue-200 cursor-pointer"
					tabIndex="0"
				>
					<Contact className="svg-icon" />
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
}

export default FirstItem;
