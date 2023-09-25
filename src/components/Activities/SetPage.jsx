import { GlobalState } from "../../context/context/Context"
import { useContext, useRef } from "react"
// import { Global } from "recharts"
const SetPage = () => {

   const {setPerPage} = useContext(GlobalState)
  const pageRef =  useRef(null)

const perPageSubmitHandler = (event) => {
    event.preventDefault()
    let perPageNumber= pageRef.current.value

    if (perPageNumber !== 0){
        setPerPage(perPageNumber)
        pageRef.current.value = perPageNumber
    }

    
}



    return (	<div className="flex mr-7 ">
    <form className="relative flex items-center" onSubmit={perPageSubmitHandler}>
        <label
            className="relative  flex  justify-center items-center mr-2 font-bold "
            htmlFor="page">
            per page:
        </label>
        <input
            type="number"
            min={1}
            max={100}
            name="page"
            className="w-12 rounded bg-grey pl-2 outline-0 border border-transparent focus:border-purple"
            placeholder="10"
            ref={pageRef}
            
           
        />
        <button type="submit">
            <i className="fa-solid fa-check text-blue hover:text-purple transition-all fa-lg ml-1"></i>
        </button>
    </form>
</div>)
}
export default SetPage