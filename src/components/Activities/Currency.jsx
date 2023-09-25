import { GlobalState } from "../../context/context/Context";
import { useContext } from "react";
import { useRef } from "react";

const Currency = () => {
	let { setPickCurrency } = useContext(GlobalState);

	const currencyRef = useRef(null);

	const currencySubmitHandler = (event) => {
		event.preventDefault();
		let currentCurrency = currencyRef.current.value
        setPickCurrency(currentCurrency)
        currencyRef.current.value = ''
	};

	return (
		<div className="flex mr-7 ">
			<form className="relative flex items-center mr-4" onSubmit={currencySubmitHandler}>
				<label
					className="relative  flex  justify-center items-center mr-2 font-bold "
					htmlFor="currency">
					currency:
				</label>
				<input
					type="text"
					name="currency"
					className="w-16 rounded bg-grey pl-2 outline-0 border border-transparent focus:border-purple"
					placeholder="PLN"
                    ref={currencyRef}
				/>
				<button type="submit">
					<i className="fa-solid fa-check hover:text-blue transition-all fa-lg ml-1"></i>
				</button>
			</form>
		</div>
	);
};
export default Currency;
