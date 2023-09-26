import { TrendingProvider } from "../context/context/ContextTrending";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/context/Context";
import { useContext } from "react";
import { TrendingState } from "../context/context/ContextTrending";
import TrendTable from "../components/Table/TrendTable";


const Trending = () => {

const { trendingData } = useContext(TrendingState)

console.log(trendingData);
	return (
	
			<Layout>
				<Header />

				<section className="w-[60%]  h-full flex flex-col mt-16 mb-24 relative">
					<div className=" w-full min-h-[60vh] flex flex-wrap justify-evenly py-8 border border-grey rounded  bg-lightblue my-4">

{
	trendingData  && trendingData.map(data=> 
	
	<TrendTable data={data} key={data.item.coin_id}/>
	)
}
						
					</div>

				</section>
				<Outlet />
			</Layout>
		
	);
};
export default Trending;

