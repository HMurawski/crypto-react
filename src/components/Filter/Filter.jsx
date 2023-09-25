import Search from "../Activities/Search";
import Currency from "../Activities/Currency";
import Searching from "../Activities/SetPage";
import Sorting from "../Activities/Sorting";
import { GlobalState } from "../../context/context/Context";
import { useContext } from "react";

const Filters = () => {
const { resetAll} = useContext(GlobalState)

	return (
		<div className="w-full h-12 border-2 border-grey rounded-lg flex items-center justify-between relative test  bg-lightblue">
			<Search />
			<Currency />
			<Sorting />
			<button className=" mx-4 border rounded p-1 border-transparent hover:border-purple font-bold" onClick={resetAll}>reset</button>
		</div>
	);
};
export default Filters;
