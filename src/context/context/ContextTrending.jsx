import { createContext, useLayoutEffect } from "react";
import { useState } from "react";
export const TrendingState = createContext({});

export const TrendingProvider = ({ children }) => {
	const [trendingData, setTrendingData] = useState();

	const getTrendingData = async () => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/search/trending`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data);
			setTrendingData(data.coins);
		} catch (error) {
			console.log(error);
		}
	};

	const resetTrendingData = () => {
		getTrendingData();
	};

	useLayoutEffect(() => {
		getTrendingData();
	}, []);

	return (
		<TrendingState.Provider
			value={{
				trendingData,
				setTrendingData,
                resetTrendingData
			}}>
			{children}
		</TrendingState.Provider>
	);
};
