const Layout = ({ children }) => {
	return (
		<div className=" w-full h-full flex flex-col first-letter:content-center items-center relative ">
			<div className="w-screen h-screen bg-white -z-10 fixed"></div>
			{children}
		</div>
	);
};
export default Layout;
