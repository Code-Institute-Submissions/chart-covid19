// import { select, json, geoPath, geoCentroid', geoNaturalEarth1,
// zoom, event,scaleOrdinal, schemeCategory10, scaleSqrt, max} from 'd3';
// import { feature } from 'topojson';
// console.log(document.body.clientWidth);
// console.log(document.body.clientHeight);

// const width = document.body.clientWidth;
// const height = document.body.clientHeight;

// import { readData } from "./loadData.js";
import { selectedDate } from "./index.js";
import { loadAndProcessData } from "./loadAndProcessData.js";
// import { sizeLegendMap } from "./sizeLegendMap.js";

const svg = d3.select("#map").attr("viewBox", `0 0 960 500`);

// const projection = d3.geoAlbersUsa().scale(1300).translate([487.5, 305]);
const projection = d3.geoAlbers();
const pathGenerator = d3.geoPath().projection(null);
// const radiusScale = d3.scaleSqrt();
// const radiusValue = (d) => d.properties[Date.parse("2020-08-28")];

//tooltip
var div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

const g = svg.append("g");
// .attr('width', width)
// .attr('height', height);

svg.call(
  d3.zoom().on("zoom", () => {
    console.log("zoom");
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

  return `County: ${props.county} <br/> Date: ${props.date} <br/> Cases: ${props.cases} <br/> Deaths: ${props.deaths}`;
};

loadAndProcessData().then((counties) => {
  //   radiusScale
  //     .domain([0, d3.max(counties.features, radiusValue)])
  //     .range([0, 10]);

  colorScale
    // remove duplicate category by cases counts
    .domain(counties.features.map(colorValue))
    // numeric sort of category by counts
    .domain()
    .sort((a, b) => a - b);
  // .range(d3.schemeSpectral[parseInt(colorScale.domain().length)]);

  // Validate sort order of category by number of cases
  //   console.log(colorScale.domain().sort((a, b) => a - b));
  //   console.log(colorScale.domain().length);

  //data join
  //append
  g.selectAll("path")
    .data(counties.features)
    .enter()
    .append("path")
    .attr("class", "counties")
    .attr("d", pathGenerator)
    .attr("fill", (d) => colorScale(colorValue(d)))
    // .attr("fill", (d) => (d.properties["fips"] ? "green" : "red"))
    // .attr("fill", (d) => colorScale(d.properties.name))
    // .attr("fill", (d) => colorScale(d.properties.state))
    // .attr("fill", "county")
    // .append("title")
    // .text((d) => d.id)
    // .text(
    //   (d) =>
    //     d.properties.name +
    //     "\n Covid19 Cases: " +
    //     d.properties.cases +
    //     "\n Date: " +
    //     d.properties.date +
    //     "\n id: " +
    //     d.id
    // );
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

  // .text((d) => console.log(d.id));
  // .text((d) => covidByFips[d.id].county);

  //   console.log(radiusValue(counties.features[0]));

  //   counties.featuresWithCases.forEach((d) => {
  //     d.properties.projected = projection(d3.geoCentroid(d));
  //   });

  //   g.selectAll("circle")
  //     // .data(counties.features)
  //     .data(counties.features)
  //     .enter()
  //     .append("circle")
  //     .attr("class", "counties-circle")
  //     .append("circle")
  //     // .attr("cx", (d) => console.log(d3.geoCentroid(d)))
  //     .attr("cx", (d) => d3.geoCentroid(d)[0])
  //     .attr("cy", (d) => d3.geoCentroid(d)[1])
  //     .attr("r", 10);
  // .attr("r", (d) => sizeScale(radiusValue(d)));
  // .attr("r", (d) => sizeScale(radiusValue(d)));
});
// svg.append("g")
//     .attr("class", "bubble")
//   .selectAll("circle")
//     .data(topojson.feature(us, us.objects.counties).features)
//   .enter().append("circle")
//     .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
//     .attr("r", 1.5);

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
