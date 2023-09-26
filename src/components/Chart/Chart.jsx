import { useLayoutEffect, useState, useContext } from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer,  } from 'recharts';
import { GlobalState } from "../../context/context/Context";


function CustomTooltip({ payload, label, active, pickCurrency = "pln" }) {
    if (active && payload && payload.length>0) {
      return (
        <div className="custom-tooltip">
          <p className="label text-sm">{`${label} : ${new Intl.NumberFormat("en-US", {
												style: "currency",
												currency: pickCurrency,
                                                minimumFractionDigits: 3
											}).format(payload[0].value)}`}</p>
         
        </div>
      );
    }
  
    return null;
  }


const ChartComp = ({data, currency, type}) => {
    const tooltipLabelStyle = {
        color: "blue",  
    };


    return (
        <ResponsiveContainer height={"90%"}  >
        <LineChart  data={data} style={{marginTop: '30px'}}>
        <Line type="monotone" dataKey={type} stroke="#ffffff" strokeWidth={"2px"} />
        <CartesianGrid stroke="#f6eaff" strokeWidth={"0.5px"} />
        <XAxis dataKey="date" stroke="#ffffff" hide />
        <YAxis  stroke="#ffffff" dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip content={<CustomTooltip  currency={currency} />} cursor={false} />
        <Legend />
      </LineChart>
      </ResponsiveContainer> 
    )
}
 


const Chart = ({id}) => {

    const [chartData, setChartData] = useState()
    let {pickCurrency} = useContext(GlobalState)
    const [type, setType] = useState("prices")
    const [days, setDays] = useState(7)

useLayoutEffect(()=>{
const getChartData = async (id) => {
    try {
        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=pln&days=${days}&interval=daily`
        )
            .then((res) => res.json())
            .then((json) => json);

            let convertedData = data[type].map((item)=>{
              {
                return {
                    date: new Date(item[0]).toLocaleDateString(),
                    [type]: item[1]
                }
              }
            })
            console.log(convertedData);
            setChartData(convertedData)
           
    } catch (error) {
        console.log(error);
    }

}

getChartData(id)
}, [id, type, days])


    return (<div className=" w-full h-[60%]">

        <ChartComp data={chartData} currency={pickCurrency} type={type}/>
        <div className="flex  justify-around  ">
            <button  className={`text-base px-2  ${type==="prices" ? 'bg-orchid bg-opacity-40  rounded ' : ''} `} onClick={() => setType("prices")}>Prices</button> 
            <button  className={`text-base px-2 ${type==="market_caps" ? 'bg-orchid bg-opacity-40 rounded ' : ''}  `} onClick={() => setType("market_caps")}>Market Caps</button>
            <button  className={`text-base px-2 ${type==="total_volumes" ? 'bg-orchid bg-opacity-40 rounded ' : ''} `} onClick={() => setType("total_volumes")}>Total Volumes</button>


            <button  className={`text-base px-2 ${days===7 ? 'bg-orchid bg-opacity-40 rounded ' : ''}`} onClick={() => setDays(7)}>7d</button>
            <button  className={`text-base px-2 ${days===14 ? 'bg-orchid bg-opacity-40 rounded ' : ''} `} onClick={() => setDays(14)}>14d</button>
            <button  className={`text-base px-2 ${days===30 ? 'bg-orchid bg-opacity-40  rounded' : ''} `} onClick={() => setDays(30)}>30d</button>
        </div>

    </div>)
}
export default Chart