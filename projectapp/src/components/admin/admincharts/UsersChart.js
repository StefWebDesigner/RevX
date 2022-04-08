// import React from "react";
// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
//
//
// export default function UsersChart() {
//     useEffect(() => {
//         const fetchPrices = async () => {
//             const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
//             const data = await res.json();
//             setChartData({
//                 labels: data.data.map((crypto) => crypto.name),
//                 datasets: [
//                     {
//                         label: "Price in USD",
//                         data: data.data.map((crypto) => crypto.priceUsd),
//                         backgroundColor: [
//                             "#ffbb11",
//                             "#C0C0C0",
//                             "#50AF95",
//                             "#f3ba2f",
//                             "#2a71d0"
//                         ]
//                     }
//                 ]
//             });
//         };
//         fetchPrices();
//     }, []);
//
//     const [chartData, setChartData] = useState({});
//
//     return (
//         <div className="App">
//
//             <Bar
//                 data="chartData"
//
//                 options={{
//                     plugins: {
//                         title: {
//                             display: true,
//                             text: "Cryptocurrency prices"
//                         },
//                         legend: {
//                             display: true,
//                             position: "bottom"
//                         }
//                     }
//                 }}
//             />
//
//
//
//         </div>
//     );
// }