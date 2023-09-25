import { createContext, useLayoutEffect } from "react";
import { useState } from "react";
export const GlobalState = createContext({});

export const GlobalProvider = ({ children }) => {
	const [cryptoData, setCryptoData] = useState();
	const [searchData, setSearchData] = useState();
	const [favSearch, setFavSearch] = useState("");
	const [pickCurrency, setPickCurrency] = useState("pln");
	const [sorting, setSorting] = useState("market_cap_desc");
	const [currentPage, setCurrentPage] = useState(1)
	const [perPage, setPerPage] = useState(10)
	const [coinData, setCoinData] = useState()
	




	const resetAll = () => {
		setCurrentPage(1)
		setFavSearch("")
		setPerPage(10)
	}

	const getCoinData = async (coinId) => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data);
			setCoinData(data);
		} catch (error) {
			console.log(error);
		}
	};

	const getCryptoData = async () => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${pickCurrency}&ids=${favSearch}&order=${sorting}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d&locale=en`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data);
			setCryptoData(data);
		} catch (error) {
			console.log(error);
		}
	};

	const getSearchData = async (query) => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/search?query=${query}`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data.coins);
			setSearchData(data.coins);
		} catch (error) {
			console.log(error);
		}
	};

	useLayoutEffect(() => {
		getCryptoData();
	}, [favSearch, pickCurrency, sorting, currentPage, perPage]);

	return (
		<GlobalState.Provider
			value={{
				cryptoData,
				searchData,
				getSearchData,
				setFavSearch,
				setSearchData,
				pickCurrency,
				setPickCurrency,
				sorting,
				setSorting,
				currentPage, setCurrentPage,
				resetAll,
				setPerPage,
				perPage,
				getCoinData,
				coinData,
				setCoinData
				
				
			}}>
			{children}
		</GlobalState.Provider>
	);
};
