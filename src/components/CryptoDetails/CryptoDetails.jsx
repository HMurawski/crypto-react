import { useState, useContext } from "react"
import { GlobalState } from "@/context/Context"
const CryptoDetails = (props) => {

    const {active, activeHandler } = useContext(GlobalState)
    let { cryptoData } = useContext(GlobalState);

   

    const Popup = <div className="  w-[100vw] h-[100vh] opacity-50 flex  items-center justify-center ">
    <div className=" w-[60%] h-[70%] bg-purple flex flex-col tenwyrazny relative">
        <h2 className=" text-center">Random CryptoWaluta</h2>
        <div className=" bg-green w-[100%] h-[70%] flex">

            <div className=" w-[50%] h-[100%] flex flex-col">
<p>Price: </p>

<p>Market Cap: </p>

<p>Total Volume:</p>

<p>High 24h:</p>
<p>Low 24h:</p>

            </div>
            <div className=" w-[50%] h-[100%] ">

wykres

            </div>


        </div>

    </div>
    
</div>


    return (active ? Popup : "")


        

    
}
export default CryptoDetails