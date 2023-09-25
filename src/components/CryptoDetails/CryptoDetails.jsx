import { useState, useContext, useLayoutEffect } from "react";
import { GlobalState } from "../../context/context/Context";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

const CryptoDetails = (props) => {
	let { coinId } = useParams();
    let navigate = useNavigate()
	let { getCoinData, coinData } = useContext(GlobalState);

	useLayoutEffect(() => {
		getCoinData(coinId);
	}, [coinId]);


const closePopup = () => {
    navigate('..')
}



	return ReactDOM.createPortal(
		<div className=" fixed top-0 w-full h-full bg-orchid bg-opacity-30 backdrop-blur-sm flex items-center justify-center " onClick={closePopup}>
			<div className="w-[65%] h-[75%] bg-blue opacity-75 rounded-lg text-white relative " onClick={(e) => {e.stopPropagation()}}>
				
        {
            coinData ?
            
            <h1>{coinData.id}</h1> : null



        }



			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default CryptoDetails;
