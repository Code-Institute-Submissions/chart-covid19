// import { select, json, geoPath, geoNaturalEarth1, zoom, event,scaleOrdinal, schemeCategory10} from 'd3';
// import { feature } from 'topojson';
// console.log(document.body.clientWidth);
// console.log(document.body.clientHeight);

// const width = document.body.clientWidth;
// const height = document.body.clientHeight;

// import { readData } from "./loadData.js";
import { loadAndProcessData } from "./loadAndProcessData.js";

const svg = d3.select("svg");

const projection = d3.geoAlbers();
const pathGenerator = d3.geoPath().projection(null);

const g = svg.append("g");
// .attr('width', width)
// .attr('height', height);

svg.call(
  d3.zoom().on("zoom", () => {
    console.log("zoom");
    g.attr("transform", d3.event.transform);
  })
);

//color with order
const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
// const colorScale = d3.scaleOrdinal();
const colorValue = (d) => parseInt(d.properties.cases);

loadAndProcessData().then((counties) => {
  colorScale
    // remove duplicate category by cases counts
    .domain(counties.features.map(colorValue))
    // numeric sort of category by counts
    .domain()
    .sort((a, b) => a - b);
  // .range(d3.schemeSpectral[parseInt(colorScale.domain().length)]);

  // Validate sort order of category by number of cases
  console.log(colorScale.domain().sort((a, b) => a - b));
  console.log(colorScale.domain().length);

  //data join
  //append
  g.selectAll("path")
    .data(counties.features)
    .enter()
    .append("path")
    .attr("class", "counties")
    .attr("d", pathGenerator)
    .attr("fill", (d) => colorScale(colorValue(d)))
    // .attr("fill", (d) => colorScale(d.properties.name))
    // .attr("fill", (d) => colorScale(d.properties.state))
    // .attr("fill","county")
    .append("title")
    .text((d) => d.properties.name + "\n Covid19 Cases: " + d.properties.cases);
  // .text((d) => console.log(d.id));
  // .text((d) => covidByFips[d.id].county);
});

// readData();

// d3.json(
//   "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json"
// ).then((data) => {
//   //   console.log(data);
//   const counties = topojson.feature(data, data.objects.counties);
//   console.log(counties);

//   //data join
//   //append
//   g.selectAll("path")
//     .data(counties.features)
//     .enter()
//     .append("path")
//     .attr("class", "counties")
//     .attr("d", pathGenerator)
//     .append("title")
//     .text((d) => d.properties.name);
// });
