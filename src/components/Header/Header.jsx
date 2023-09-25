
const Header = () => {
	return (
		<nav className="w-[45%] mt-16 flex justify-around align-middle border  rounded-lg ">
			<a
				href="/"
				className="w-full text-base bg-blue text-white text-center m-2.5 hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded ">
				CRYPTO
			</a>
			<a
				href="/trending"
				className="w-full text-base bg-blue text-white text-center m-2.5 hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded ">
				TRENDING
			</a>
			<a
				href="/favourites"
				className="w-full text-base bg-blue text-white text-center m-2.5 hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded ">
				FAVOURITE
			</a>
		</nav>
	);
};
export default Header;
