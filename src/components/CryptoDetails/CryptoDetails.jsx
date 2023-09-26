import { useState, useContext, useLayoutEffect, useEffect } from "react";
import { GlobalState } from "../../context/context/Context";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import Chart from "../Chart/Chart";

const Indicator = ({ current_price, high, low }) => {
	const [green, setGreen] = useState();

	useEffect(() => {
		let total = high - low;
		let greenZone = ((high - current_price) * 100) / total;
		setGreen(Math.ceil(greenZone));
	}, [current_price, high, low]);

	return (
		<>
			<span
				className="bg-green h-1.5 rounded-r-lg w-[50%] "
				style={{ width: `${green}%` }}>
				&nbsp;
			</span>
			<span
				className="bg-red h-1.5 rounded-l-lg w-[50%] "
				style={{ width: `${100 - green}%` }}>
				&nbsp;
			</span>
		</>
	);
};

const CryptoDetails = (props) => {
	let { coinId } = useParams();
	let navigate = useNavigate();
	let { getCoinData, coinData, pickCurrency } = useContext(GlobalState);

	useLayoutEffect(() => {
		getCoinData(coinId);
	}, [coinId]);

	const closePopup = () => {
		navigate("..");
	};

	return ReactDOM.createPortal(
		<div
			className=" fixed top-0 w-full h-full bg-orchid bg-opacity-30 backdrop-blur-sm flex items-center justify-center "
			onClick={closePopup}>
			<div
				className="w-[60%] h-[60%] bg-darkblue opacity-75 rounded-lg text-white relative "
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{coinData ? (
					<div className="flex items-center  justify-around h-full w-full p-4 ">
						<div className=" flex flex-col w-[45%] h-full pr-2">
							<div className="flex w-full items-center my-2">
								<img
									className="w-[3rem] h-[3rem] mx-2"
									src={coinData.image.large}
									alt={coinData.id}
								/>
								<h2 className="text-xl font-bold ">{coinData.name}</h2>
								<span className="text-base py-1 px-2.5 ml-2 rounded uppercase bg-purple bg-opacity-20">
									{coinData.symbol}
								</span>
							</div>

							<div className="flex w-full mt-6 ">
								<div className="flex flex-col w-full ">
									<div className="flex justify-between ">
										<span className="text-base">Price</span>
										<div
											className={`text-base px-1 ml-2 font-medium flex items-center rounded uppercase 
                                        
                                        ${
																					coinData.market_data
																						.price_change_percentage_24h > 0
																						? "text-green bg-green bg-opacity-25"
																						: "text-red bg-red bg-opacity-25 "
																				} 
                                        
                                        
                                        `}>
											<span className="text-base mx-1">
												{Number(
													coinData.market_data.price_change_percentage_24h
												).toFixed(2)}
												%
											</span>
											{coinData.market_data.price_change_percentage_24h > 0 ? (
												<i class="fa-solid fa-arrow-up"></i>
											) : (
												<i class="fa-solid fa-arrow-down"></i>
											)}
										</div>
									</div>
									<h3 className="text-lg font-bold">
										{new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: pickCurrency,
											maximumSignificantDigits: 5,
										}).format(coinData.market_data.current_price[pickCurrency])}
									</h3>
								</div>
							</div>

							<div className="flex w-full mt-4 justify-between ">
								<div className="flex flex-col">
									<span className="text-base">Market Cap</span>
									<h3 className="text-base font-bold">
										{new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: pickCurrency,
											minimumFractionDigits: 0,
										}).format(coinData.market_data.market_cap[pickCurrency])}
									</h3>
								</div>
								<div className="flex flex-col">
									<span className="text-base">Fully Diluted Valuation</span>
									<h3 className="text-base font-bold">
										{new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: pickCurrency,
											notation: "compact",
										}).format(
											coinData.market_data.fully_diluted_valuation[pickCurrency]
										)}
									</h3>
								</div>
							</div>

							<div className="flex flex-col w-full mt-4 justify-between ">
								<span className="text-base">Total Volume</span>
								<h3 className="text-base font-bold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: pickCurrency,
										minimumFractionDigits: 0,
									}).format(coinData.market_data.total_volume[pickCurrency])}
								</h3>
							</div>

							<div className="flex w-full mt-4 justify-between">
								<Indicator
									current_price={
										coinData.market_data.current_price[pickCurrency]
									}
									high={coinData.market_data.high_24h[pickCurrency]}
									low={coinData.market_data.low_24h[pickCurrency]}
								/>
							</div>

							<div className="flex w-full mt-4 justify-between ">
								<div className="flex flex-col">
									<span className="text-base">High 24h</span>
									<h3 className="text-base font-bold text-green ">
										{new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: pickCurrency,
											minimumFractionDigits: 4,
										}).format(coinData.market_data.high_24h[pickCurrency])}
									</h3>
								</div>
								<div className="flex flex-col">
									<span className="text-base">Low 24h</span>
									<h3 className="text-base font-bold text-red">
										{new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: pickCurrency,
											minimumFractionDigits: 4,
										}).format(coinData.market_data.low_24h[pickCurrency])}
									</h3>
								</div>
							</div>

							<div className="flex w-full mt-4 justify-between">
								<div className="flex flex-col">
									<a
										target="_blank"
										rel="noreferrer"
										className="text-base px-1.5 py-0.5 my-1 rounded"
										href={coinData?.links?.homepage[0]}>
										{coinData?.links?.homepage[0].substring(0, 30)}
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										className="text-base px-1.5 py-0.5 my-1 rounded"
										href={coinData?.links?.blockchain_site[0]}>
										{coinData?.links?.blockchain_site[0].substring(0, 30)}
									</a>

									{coinData?.links?.official_forum_url[0] && (
										<a
											target="_blank"
											rel="noreferrer"
											className="text-base px-1.5 py-0.5 my-1 rounded"
											href={coinData?.links?.official_forum_url[0]}>
											{coinData?.links?.official_forum_url[0].substring(0, 30)}
										</a>
									)}
								</div>

								<div className="flex flex-col content-start">
									<span className="text-base capitalize">sentiment</span>
									<div className="flex justify-between ">
										<div
											className={`text-base px-1 ml-2 my-1 font-medium flex items-center rounded uppercase text-green bg-green bg-opacity-25`}>
											<span className="text-base mx-1">
												{Number(coinData.sentiment_votes_up_percentage).toFixed(
													2
												)}
												%
											</span>
										</div>
									</div>
									<div className="flex justify-between ">
										<div
											className={`text-base px-1 ml-2  my-1 font-medium flex items-center rounded uppercase text-red bg-red bg-opacity-25`}>
											<span className="text-base mx-1">
												{Number(
													coinData.sentiment_votes_down_percentage
												).toFixed(2)}
												%
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-[45%] h-full pl-4 ">
							<Chart id={coinData.id} />
						</div>
					</div>
				) : null}
			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default CryptoDetails;
