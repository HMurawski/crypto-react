import Layout from "../components/Layout/Layout"
import Logo from "../components/Logo/Logo"
import Header from "../components/Header/Header"
import Filters from "../components/Filter/Filter"
import {GlobalProvider} from "../context/context/Context"
import Table from "../components/Table/Table"
import {TrendingProvider} from "../context/context/ContextTrending"
import { Outlet } from "react-router-dom"



const Crypto = () => {
   
    return (
<GlobalProvider> 
  <TrendingProvider> 
   <Layout>
    <Logo />
    <Header />
    <section className="w-[50%]  h-full flex flex-col mt-16 mb-24 relative">
    <Filters />
      <Table />
      <Outlet />
       </section>
     

   </Layout>
   </TrendingProvider>
   </GlobalProvider>

   )
}
export default Crypto

