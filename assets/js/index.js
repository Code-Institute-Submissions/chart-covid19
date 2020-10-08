import { readData } from "./loadData.js";
import { colorLegend } from "./colorLegend.js";
import { lineChart } from "./lineChart.js";

const svg = d3.select("#chart").attr("viewBox", `0 0 960 500`);

const colorLegendG = svg.append("g");
const lineChartG = svg.append("g");

const width = +svg.attr("width");
const height = +svg.attr("height");

export var parseTime = d3.timeParse("%B %d, %Y");

let trendData;
// selectedDate
export let selectedDate = parseTime("June 30, 2020");

const setSelectedDate = (date) => {
  selectedDate = date;
  render(trendData);
};

//accessor functions
const render = (data) => {
  const yValue = (d) => d.cases;

  const colorScale = d3.scaleOrdinal(d3.schemeAccent);

  // yValue of the last entry for each county
  const lastYValue = (d) => yValue(d.values[d.values.length - 1]);

  const nested = d3
    .nest()
    .key((d) => d.county)
    .entries(data)
    .sort((a, b) => d3.descending(lastYValue(a), lastYValue(b)));

  colorScale.domain(nested.map((d) => d.key));

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
  trendData = d;
  render(trendData);
});
