import { useState, useContext } from "react";
import { GlobalState } from "../../context/context/Context";
import ReactDOM from "react-dom";

const CryptoDetails = (props) => {
	return ReactDOM.createPortal(
		<div className=" fixed top-0 w-full h-full bg-orchid bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
			details
		</div>,
		document.getElementById("modal")
	);
};
export default CryptoDetails;
