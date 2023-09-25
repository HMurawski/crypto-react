import { useLayoutEffect, useState } from "react"

const Chart = ({id}) => {

    const [chartData, setChartData] = useState()

useLayoutEffect(()=>{
const getChartData = async (id) => {
    try {
        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=pln&days=7&interval=daily`
        )
            .then((res) => res.json())
            .then((json) => json);
            setChartData(data)
            console.log(chartData);
    } catch (error) {
        console.log(error);
    }

}

getChartData(id)
}, [id])


    return (<div>




    </div>)
}
export default Chart