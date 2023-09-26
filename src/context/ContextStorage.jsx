import { createContext, useLayoutEffect } from "react";
import { useState } from "react";

export const StorageState = createContext({});

export const StorageProvider = ({ children }) => {
	
    const [allCoins, setAllCoins] = useState()

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

	useLayoutEffect(() => {
		let isThere = JSON.parse(localStorage.getItem("coins")) || false;

        if (!isThere){
            localStorage.setItem("coins", JSON.stringify([]))
        } else {
            let totalCoins = JSON.parse(localStorage.getItem("coins"))
            setAllCoins(totalCoins)
        }

	}, []);

	return (
		<StorageState.Provider
			value={{
				saveCoin
				
			}}>
			{children}
		</StorageState.Provider>
	);
};
