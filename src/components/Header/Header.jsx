import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<nav className="w-[45%] mt-16 flex justify-around align-middle border  rounded-lg ">
			<NavLink
				to="/"
				end
				className={({ isActive }) => {
					return `w-full text-base bg-blue text-white text-center m-2.5
						
						${isActive ? "bg-darkblue font-bold" : ""}
						
						hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded `;
				}}>
				CRYPTO
			</NavLink>
			<NavLink
				to="/trending"
				className={({ isActive }) => {
					return `w-full text-base bg-blue text-white text-center m-2.5
						
						${isActive ? "bg-darkblue font-bold" : ""}
						
						hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded `;
				}}>
				TRENDING
			</NavLink>
			<NavLink
				to="/favourites"
				className={({ isActive }) => {
					return `w-full text-base bg-blue text-white text-center m-2.5
						
						${isActive ? "bg-darkblue font-bold" : ""}
						
						hover:bg-darkblue active:bg-darkblue border-0 cursor-pointer rounded `;
				}}>
				FAVOURITE
			</NavLink>
		</nav>
	);
};
export default Header;
