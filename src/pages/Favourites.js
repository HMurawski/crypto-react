import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/context/Context";
import { useContext } from "react";
import { TrendingState } from "../context/context/ContextTrending";
import TrendTable from "../components/Table/TrendTable";
import Layout from "../components/Layout/Layout";
import TableButton from "../components/Table/TableButton";
import { Link } from "react-router-dom";
import { GlobalState } from "../context/context/Context";
import { StorageState } from "../context/ContextStorage";



const Fav = () => {

const { pickCurrency } = useContext(GlobalState)
const {favData} = useContext(StorageState)

	return (
	
			<Layout>
				<Header />

				<section className="w-[60%]  h-full flex flex-col mt-16 mb-24 relative">
					<div className=" w-full  border border-grey rounded  bg-lightblue my-4">
				
{
	favData  ?
	
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
			{favData.map((data) => {
				return (
					<tr
						className="text-center text-base border-b border-grey last:border-b-0   "
						key={data.id}>
						<td className=" py-4 flex items-center uppercase ">
							<TableButton data={data} />
							<Link to={`/favourites/${data.id}`} className="cursor-pointer">
								
								<img
									src={data.image}
									alt={data.name}
									className=" w-12 mx-1.5"
								/>
							</Link>

							<span>
								<Link to={`/favourites/${data.id}`} className="cursor-pointer">
									
									{data.symbol}
								</Link>
							</span>
						</td>
						<td className=" py-4 ">
							<Link to={`/favourites/${data.id}`} className="cursor-pointer">
								
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

			: <p className="text-center bg-blue text-white">Sorry, no favourite Crypto Coins added yet :(</p>

	
}
						
					</div>

				</section>
				<Outlet />
			</Layout>
		
	);

};
export default Fav;
