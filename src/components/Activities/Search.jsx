import { useState } from "react";
import { useContext } from "react";
import { GlobalState } from "../../context/context/Context";
import debounce from "lodash.debounce";

const SearchInputData = ({ searchFunctionHandler }) => {
	const [searchInput, setSearchInput] = useState("");

	let { searchData, setFavSearch, setSearchData } = useContext(GlobalState);

	let searchInputHandler = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchInput(searchValue);
		searchFunctionHandler(searchValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault()
		setSearchInput('')
		setSearchData()
		// let searchValue = event.target.value;
		// searchFunctionHandler(searchValue)
	}

	const selectFav = (fav) => {
		setFavSearch(fav);
		setSearchInput('')
		setSearchData()
	};

	

	return (
		<>
			<form className=" w-60 relative flex items-center ml-2">
				<input
					type="text"
					id="search"
					name="search"
					className="w-full rounded bg-grey  outline-0  border border-transparent focus:border-purple"
					placeholder="search here..."
					onChange={searchInputHandler}
					value={searchInput}
				/>
				<button type="submit" onClick={handleSubmit}>
					<i className="fa-solid fa-magnifying-glass absolute top-1 right-1  hover:text-blue"></i>
				</button>
			</form>
			{searchInput.length > 0 ? (
				<ul className=" absolute top-11 left-0 flex flex-col w-80 h-80 rounded overflow-x-hidden py-2 bg-grey  bg-opacity-60  backdrop-blur-sm">
					{searchData ? (
						searchData.map((item) => {
							return (
								<li
									className="flex my-2 cursor-pointer py-1"
									key={item.id}
									onClick={() => selectFav(item.id)}>
									<img
										src={item.thumb}
										alt={item.name}
										className=" w-6  mx-1"
									/>
									{item.id}
								</li>
							);
						})
					) : (<div className="flex flex-col justify-center  items-center h-full"> <p className=" ">Loading...please wait</p>

					<div className="w-8 h-8 border-4 border-purple border-b-orchid animate-spin rounded-full mt-4" />
					</div>
						
					)}
				</ul>
			) : null}
		</>
	);
};

const Search = () => {
	let { getSearchData } = useContext(GlobalState);

	const debounceFunction = debounce((value) => {
		getSearchData(value);
	}, 1000);

	return (
		<div className="relative">
			<SearchInputData searchFunctionHandler={debounceFunction} />
		</div>
	);
};
export default Search;
