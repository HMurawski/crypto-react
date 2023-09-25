
import { TrendingState } from "../../context/context/ContextTrending";
import { useContext } from "react";

const TrendingTable = () => {
    const { trendingData } = useContext(TrendingState)
    console.log(trendingData);



    return (

<div className="flex flex-wrap justify-evenly w-full min-h-[60vh]  py-8 border border-grey rounded   bg-lightblue my-4"> 
       
      {
        trendingData ? trendingData.map((data)=>{
            return (<div key={data.item.id} className=" border border-transparent rounded-lg w-[45%] my-2 flex  align-middle justify-around bg-orchid hover:text-purple hover:border-purple transition-all">
                <div className=" my-2"><p>Name:<span className="text-purple font-bold ml-1">{data.item.name}</span> </p>
                <p>Market Cap Rank:<span className="text-purple font-bold ml-1">{data.item.market_cap_rank}</span></p>
                <p>Price in BTC: <span className="text-purple font-bold ml-1">{data.item.price_btc.toFixed(10)}</span></p>
                <p>Score: <span className=" text-purple font-bold ml-1">{data.item.score}</span></p></div>
               
                <img className=" w-24 my-2" src={data.item.large} alt="currency logo"></img>
            </div>)
        })
        
        
        
        
        
        
        
        : <p>Sorry, failed to fetch trending data</p>
      }


</div>
    )
}
export default TrendingTable