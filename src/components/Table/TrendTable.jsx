import { useNavigate } from "react-router-dom";
const TrendTable = ({ data }) => {

    let navigate= useNavigate()
    const getCoinDetails = (id) => {
        navigate(`/${id}`)
    }

	return (
		<div className=" border border-transparent rounded-lg w-[45%] my-2 flex  align-middle justify-around bg-orchid hover:text-purple hover:border-purple transition-all" onClick={() => getCoinDetails(data.item.id)}>
			<div className=" my-2">
				<p>
					Name:
					<span className="text-purple font-bold ml-1">{data.item.name}</span>
				</p>
				<p>
					Market Cap Rank:
					<span className="text-purple font-bold ml-1">
						{data.item.market_cap_rank}
					</span>
				</p>
				<p>
					Price in BTC:
					<span className="text-purple font-bold ml-1">
						{data.item.price_btc.toFixed(10)}
					</span>
				</p>
				<p>
					Score:
					<span className=" text-purple font-bold ml-1">{data.item.score}</span>
				</p>
			</div>

			<img
				className=" w-24 my-2"
				src={data.item.large}
				alt="currency logo"></img>
		</div>
	);
};
export default TrendTable;
