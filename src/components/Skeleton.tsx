const Skeleton = () => {
	return (
		<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
			<div className="w-[3rem] h-[3rem] border-t-4 border-b-4 border-blue-100 rounded-full animate-spin"></div>
		</div>
	);
};

export default Skeleton;
