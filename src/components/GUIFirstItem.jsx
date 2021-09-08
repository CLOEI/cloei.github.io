import React from "react";
import classes from "./styles/GUIFirstItem.module.css";
import { ReactComponent as Floppy } from "../assets/floppy.svg";
import { ReactComponent as Harddisk } from "../assets/hard-disk.svg";
import { ReactComponent as Contacts } from "../assets/contacts.svg";

function GUIFirstItem(p) {
	return (
		<div className={classes.container}>
			<div className={classes.itemList}>
				<div className={classes.item}>
					<Floppy />
					<p>About me</p>
				</div>
				<div className={classes.item}>
					<Harddisk />
					<p>Projects list</p>
				</div>
				<div className={classes.item}>
					<Contacts />
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
}

export default GUIFirstItem;
