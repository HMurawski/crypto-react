import { GlobalState } from "../../context/context/Context"
import { useContext } from "react"

const Sorting = () => {
    let { setSorting } = useContext(GlobalState);

   const sortingHandler = (event) => {
    event.preventDefault()
    let v = event.target.value
    setSorting(v)
   }

    return (<label className="relative flex justify-center items-center mr-2">
            <span className=" font-bold mr-2">sort by:</span>
            <select name="sortby" id="sortby" className="rounded bg-grey pl-2 pr-4 py-1 border border-transparent focus:border-purple capitalize " onClick={sortingHandler}>
                <option value="market_cap_desc">market cap desc</option>
                <option value="market_cap_asc">market cap asc</option>
                <option value="gecko_desc">gecko desc</option>
                <option value="gecko_asc">gecko asc</option>
                <option value="volume_dsc">volume dsc</option>
                <option value="volume_asc">volume asc</option>
                <option value="id_dsc">id dsc</option>
                <option value="id_asc">id asc</option>
            </select>


    </label>)
}
export default Sorting