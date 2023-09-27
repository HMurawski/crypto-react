import { createContext, useLayoutEffect } from "react";
import { useState, useContext } from "react";
import { GlobalState } from "./context/Context";


export const StorageState = createContext({});

export const StorageProvider = ({ children }) => {
	
    const [allCoins, setAllCoins] = useState()
    const [favData, setFavData] = useState()

    const {pickCurrency, sorting, currentPage, perPage } = useContext(GlobalState)


    const saveCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"))

        if(oldCoins.includes(coinId)){
            return null
        } else {
            let newCoin = [...oldCoins, coinId]
            setAllCoins(newCoin)
            localStorage.setItem("coins", JSON.stringify(newCoin))
        }


    }

    const removeCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"))
        
        let newCoin = oldCoins.filter(coin => coin !== coinId)
        setAllCoins(newCoin)
            localStorage.setItem("coins", JSON.stringify(newCoin))
    }

	const getFavData = async (totalCoins = allCoins) => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${pickCurrency}&ids=${totalCoins.join(",")}&order=${sorting}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d&locale=en`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data);
			setFavData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useLayoutEffect(() => {
		let isThere = JSON.parse(localStorage.getItem("coins")) || false;

        if (!isThere){
            localStorage.setItem("coins", JSON.stringify([]))
        } else {
            let totalCoins = JSON.parse(localStorage.getItem("coins"))
            setAllCoins(totalCoins)


            if(totalCoins.length > 0){
                getFavData(totalCoins)
            }
        }

      

	}, []);

	return (
		<StorageState.Provider
			value={{
				saveCoin,
                allCoins,
                removeCoin,
                favData
				
			}}>
			{children}
		</StorageState.Provider>
	);
};
