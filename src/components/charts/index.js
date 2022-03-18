import { Chart } from "react-google-charts";

export default function Charts({data,chartType}){
  console.log(data,chartType)

   return <Chart
     chartType={chartType}
     data={data}
     width="100%"
     height="400px"
     legendToggle
    />

}