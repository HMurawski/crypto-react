import { TrendingProvider } from "../context/context/ContextTrending";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import TrendingTable from "../components/Table/TrendingTable";

const Trending = () => {
	return (
		<TrendingProvider>
			<Layout>
				<Header />

				<section className="w-[80%]  h-full flex flex-col mt-16 mb-24 relative">
					<TrendingTable />
				</section>
			</Layout>
		</TrendingProvider>
	);
};
export default Trending;
