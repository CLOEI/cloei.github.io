function GUIHeader({ title }) {
	return (
		<div className="flex bg-black text-white p-2 justify-between align-middle">
			<p className="font-bold">{title}</p>
			<div>
				<button className="h-20p w-20p bg-white text-black">_</button>
				<button className="h-20p w-20p bg-white text-black mx-1.5">#</button>
				<button className="h-20p w-20p bg-white text-black">X</button>
			</div>
		</div>
	);
}

export default GUIHeader;
