import { useState } from "react";
import { GlobalState } from "../../context/context/Context";
import { useContext } from "react";
import SetPage from "../Activities/SetPage";
const Pagination = () => {
	let { currentPage, setCurrentPage, perPage, cryptoData } = useContext(GlobalState);

	const totalPages = 1000

	let Total = Math.ceil(totalPages / perPage);

	const nextButton = () => {
		setCurrentPage(currentPage + 1);
		if (currentPage >= Total) {
			setCurrentPage(currentPage);
		}
	};
	const prevButton = () => {
		setCurrentPage(currentPage - 1);
		if (currentPage <= 1) {
			setCurrentPage(currentPage);
		}
	};
	const maxButton = () => {
		setCurrentPage(Total);
	};
	const minButton = () => {
		setCurrentPage(1);
	};

	if(cryptoData && cryptoData.length >= perPage){
		return (
			<div className="flex items-center">
				<SetPage />
				<ul className="flex items-center justify-end text-sm">
					{currentPage !== 1 ? (
						<li className="flex items-center">
							<button className="hover:text-purple " onClick={prevButton}>
								<img
									className="rotate-180"
									src="/pagination-arrow.svg"
									alt="left arrow"
								/>
							</button>
						</li>
					) : (
						""
					)}
					{currentPage > 3 ? (
						<li>
							<button
								className="outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center"
								onClick={minButton}>
								...
							</button>
						</li>
					) : (
						""
					)}
					{currentPage !== 1 ? (
						<li>
							<button
								className="outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-orchid mx-1"
								onClick={prevButton}>
								{currentPage - 1}
							</button>
						</li>
					) : (
						""
					)}
					<li>
						<button className="outline-0 hover:text-purple rounded-full w-8 h-8 flex items-center justify-center bg-blue mx-1 text-white">
							{currentPage}
						</button>
					</li>
					{currentPage < Total ? (
						<li>
							<button
								className="outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-orchid mx-1"
								onClick={nextButton}>
								{currentPage + 1}
							</button>
						</li>
					) : (
						""
					)}
					{currentPage < (Total -2) ? (
						<li>
							<button
								className="outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center"
								onClick={maxButton}>
								...
							</button>
						</li>
					) : (
						""
					)}
					{currentPage < (Total -1) ? (
						<li>
							<button
								className="outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center bg-orchid mx-1"
								onClick={maxButton}>
								{Total}
							</button>
						</li>
					) : (
						""
					)}
					{currentPage !== Total ? (
						<li>
							<button className="hover:text-purple" onClick={nextButton}>
								<img src="/pagination-arrow.svg" alt="right arrow" />{" "}
							</button>
						</li>
					) : (
						""
					)}
				</ul>
			</div>
		);
	} else {
		return null
	}
};
export default Pagination;
