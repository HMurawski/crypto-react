import { createContext, useEffect, useLayoutEffect } from "react";
import { useState, useContext, } from "react";
import { GlobalState } from "./context/Context";


export const StorageState = createContext({});

export const StorageProvider = ({ children }) => {
	
    const [allCoins, setAllCoins] = useState('')
    const [favData, setFavData] = useState()
    const [isAllCoinsEmpty, setIsAllCoinsEmpty] = useState(allCoins.length === 0);


    console.log(`stan 1`);
    console.log(allCoins.length);


    const {pickCurrency, sorting} = useContext(GlobalState)


    const saveCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"))

        if(oldCoins.includes(coinId)){
            return null
        } else {
            let newCoin = [...oldCoins, coinId]
            setAllCoins(newCoin)
            localStorage.setItem("coins", JSON.stringify(newCoin))
            setIsAllCoinsEmpty(false)
        }


    }

    const removeCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"))
        
        let newCoin = oldCoins.filter(coin => coin !== coinId)
        setAllCoins(newCoin)
            localStorage.setItem("coins", JSON.stringify(newCoin))

            if (newCoin.length === 0) {
                setIsAllCoinsEmpty(true);
              }
    }

	const getFavData = async (totalCoins = allCoins) => {
		try {
			const data = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${pickCurrency}&ids=${totalCoins.join(",")}&order=${sorting}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d&locale=en`
			)
				.then((res) => res.json())
				.then((json) => json);
			console.log(data);
			setFavData(data);
		} catch (error) {
			console.log(error);
		}
	};

 


    
    useEffect(()=>{
        if(allCoins.length > 0){
            getFavData(allCoins)
        }else {
           setFavData()
        }

    }, [allCoins, isAllCoinsEmpty])



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
                favData,
                
				
			}}>
			{children}
		</StorageState.Provider>
	);
};
