// Generate Choropleth Map of US Counties
import { selectedDate } from "./index.js";
import { loadAndProcessData } from "./loadAndProcessData.js";

const svg = d3.select("#map").attr("viewBox", `0 0 960 500`);

const pathGenerator = d3.geoPath().projection(null);

//tooltip
var div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const g = svg.append("g");

svg.call(
  d3.zoom().on("zoom", () => {
    g.attr("transform", d3.event.transform);
  })
);

// //color with order
const colorScale = d3.scaleOrdinal(d3.schemePaired);
// // const colorScale = d3.scaleOrdinal();
const colorValue = (d) => parseInt(d.id);

//tooltip render properties
const renderProperties = (d) => {
  const date = selectedDate.toISOString().split("T")[0];
  const props = d.properties.dates[date];

  if (!props) {
    return "";
  }
  //tooltip info display
  return `County: ${props.county} <br/> Date: ${props.date} <br/> Cases: ${props.cases} <br/> Deaths: ${props.deaths}`;
};

loadAndProcessData().then((counties) => {
  colorScale
    // remove duplicate category by cases counts
    .domain(counties.features.map(colorValue))
    // numeric sort of category by counts
    .domain()
    .sort((a, b) => a - b);

  //data join
  //append
  g.selectAll("path")
    .data(counties.features)
    .enter()
    .append("path")
    .attr("class", "counties")
    .attr("d", pathGenerator)
    .attr("fill", (d) => colorScale(colorValue(d)))
    //tooltip mouse event to synch with linechart selected date
    .on("mouseover", function (d) {
      div.transition().duration(200).style("opacity", 0.9);
      div
        .html(renderProperties(d))
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY - 28 + "px");
    })
    .on("mouseout", function (d) {
      div.transition().duration(500).style("opacity", 0);
      div.html(null);
    });
});
