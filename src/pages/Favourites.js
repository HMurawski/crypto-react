import { GlobalProvider } from "../context/context/Context";
import { TrendingProvider } from "../context/context/ContextTrending";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import FavTable from "../components/Table/FavTable";

const Fav = () => {
	return (
		<GlobalProvider>
			<TrendingProvider>
				<Layout>
					<Header />

					<section className="w-[50%]  h-full flex flex-col mt-16 mb-24 relative">
						<FavTable />
					</section>
				</Layout>
			</TrendingProvider>
		</GlobalProvider>
	);
};
export default Fav;
