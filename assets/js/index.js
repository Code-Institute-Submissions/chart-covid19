// import {
//     select,
//     csv,
//     scaleLinear,
//     scaleTime,
//     extent,
//     axisLeft,
//     axisBottom,
//     line,
//     curveBasis,
//     nest,
//     schemeAccent,
//     descending,
//     format,
//     mouse
// } from 'd3';
import { readData } from "./loadData.js";
import { colorLegend } from "./colorLegend.js";
import { lineChart } from "./lineChart.js";

const svg = d3.select("#chart");
const colorLegendG = svg.append("g");
const lineChartG = svg.append("g");

const width = +svg.attr("width");
const height = +svg.attr("height");

export var parseTime = d3.timeParse("%B %d, %Y");

let trentData;
// selectedDate
export let selectedDate = parseTime("June 30, 2020");

const setSelectedDate = (date) => {
  selectedDate = date;
  render(trentData);
};

//accessor functions
const render = (data) => {
  const yValue = (d) => d.cases;

  const colorScale = d3.scaleOrdinal(d3.schemeAccent);

  // yValue of the last entry for each county
  const lastYValue = (d) => yValue(d.values[d.values.length - 1]);

  // console.log(lastYValue);

  const nested = d3
    .nest()
    .key((d) => d.county)
    .entries(data)
    .sort((a, b) => d3.descending(lastYValue(a), lastYValue(b)));

  colorScale.domain(nested.map((d) => d.key));

  // console.log(nested);

  lineChartG.call(lineChart, {
    colorScale,
    yValue,
    title: "Massachusetts Covid-19 Cases by County",
    xValue: (d) => d.date,
    xAxisLabel: "Time",
    yAxisLabel: "Cases",
    circleRadius: 6,
    margin: { top: 60, right: 200, bottom: 88, left: 130 },
    width,
    height,
    data: data,
    nested,
    selectedDate,
    setSelectedDate,
  });

  colorLegendG.attr("transform", `translate(780,75)`).call(colorLegend, {
    colorScale,
    circleRadius: 10,
    spacing: 23,
    textOffset: 20,
  });
};

readData().then((d) => {
  console.log(d);
  trentData = d;
  render(trentData);
});

// d3.csv(
//   "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
// ).then((loadedData) => {
//   // console.log(data);

//   const MASSDATA = loadedData.filter(function (d) {
//     return d.state == "Massachusetts";
//   });

//   MASSDATA.forEach((d) => {
//     d.date = new Date(d.date);
//     d.cases = +d.cases;
//     d.deaths = +d.deaths;
//   });

//   trentData = MASSDATA;
//   render(trentData);
// });
