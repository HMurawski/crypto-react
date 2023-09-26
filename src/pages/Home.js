import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/context/Context";
import { TrendingProvider } from "../context/context/ContextTrending";
const Home = () => {
	return (
		<>
			<GlobalProvider>
				<TrendingProvider>  
				<Outlet />
                </TrendingProvider>
			</GlobalProvider>
		</>
	);
};
export default Home;
