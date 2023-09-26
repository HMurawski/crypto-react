import { GlobalProvider, GlobalState } from "../../context/context/Context";
import { useContext } from "react";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

import TableButton from "./TableButton";


const Table = () => {
	let { cryptoData } = useContext(GlobalState);
	let { pickCurrency, setPickCurrency } = useContext(GlobalState);
	
	return (
		<>
			<div className="flex flex-col  border border-grey rounded  bg-lightblue my-4">
				{cryptoData ? (
					<table className="w-full table-auto ">
						<thead className=" text-base text-black font-medium border-b border-grey">
							<tr>
								<th className="py-1">Asset</th>
								<th className="py-1">Name</th>
								<th className="py-1">Price</th>
								<th className="py-1">High 24h</th>
								<th className="py-1">Low 24h</th>
								<th className="py-1">Total Volume</th>
								<th className="py-1">1H</th>
								<th className="py-1">24H</th>
								<th className="py-1">7D</th>
							</tr>
						</thead>
						<tbody>
							{cryptoData.map((data) => {
								return (
									<tr
										className="text-center text-base border-b border-grey last:border-b-0   "
										key={data.id}>
										<td className=" py-4 flex items-center uppercase ">
											<TableButton data={data} />
											<Link to={`/${data.id}`} className="cursor-pointer">
												
												<img
													src={data.image}
													alt={data.name}
													className=" w-12 mx-1.5"
												/>
											</Link>

											<span>
												<Link to={`/${data.id}`} className="cursor-pointer">
													
													{data.symbol}
												</Link>
											</span>
										</td>
										<td className=" py-4 ">
											<Link to={`/${data.id}`} className="cursor-pointer">
												
												{data.name}
											</Link>
										</td>
										<td className=" py-4 ">
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: pickCurrency,
											}).format(data.current_price)}
										</td>
										<td className=" py-4 text-greenTop ">
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: pickCurrency,
											}).format(data.high_24h)}
										</td>
										<td className=" py-4 text-redBot ">
											{new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: pickCurrency,
											}).format(data.low_24h)}
										</td>
										<td className=" py-4 ">{data.total_volume}</td>
										<td
											className={
												data.price_change_percentage_1h_in_currency.toFixed(2) >
												0
													? "text-green"
													: "text-red"
											}>
											{`${data.price_change_percentage_1h_in_currency.toFixed(
												2
											)}%`}
										</td>
										<td
											className={
												data.price_change_percentage_24h.toFixed(2) > 0
													? "text-green"
													: "text-red"
											}>{`${data.price_change_percentage_24h.toFixed(2)}%`}</td>
										<td
											className={
												data.price_change_percentage_7d_in_currency.toFixed(2) >
												0
													? "text-green"
													: "text-red"
											}>
											{`${data.price_change_percentage_7d_in_currency.toFixed(
												2
											)}%`}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<p className=" text-red text-center">
						{" "}
						Sorry, failed to fetch - too many requests have been made to the
						Coin Gecko API. Please try again in a second.
					</p>
				)}
			</div>
			<div className=" bg-white flex  justify-between">
				<span className="text-blue">
					Powered by:{" "}
					<a href="https://www.coingecko.com/" target="_blank" rel="noreferrer">
						CoinGecko
						<img
							className=" w-10  inline-block ml-1"
							src="/coinGecko.png"
							alt="CoinGecko logo"
						/>
					</a>
				</span>

				<Pagination />
			</div>
		</>
	);
};
export default Table;

