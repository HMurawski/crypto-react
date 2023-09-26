import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/context/Context";
import { TrendingProvider } from "../context/context/ContextTrending";
import { StorageProvider } from "../context/ContextStorage";
const Home = () => {
	return (
		<>
			<GlobalProvider>
				<TrendingProvider>  
					<StorageProvider>
				<Outlet />
				</StorageProvider>
                </TrendingProvider>
			</GlobalProvider>
		</>
	);
};
export default Home;
