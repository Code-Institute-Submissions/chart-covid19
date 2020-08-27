// import { select, json, geoPath, geoNaturalEarth1, zoom, event} from 'd3';
// import { feature } from 'topojson';
// console.log(document.body.clientWidth);
// console.log(document.body.clientHeight);

// const width = document.body.clientWidth;
// const height = document.body.clientHeight;

import { readData } from "./loadData.js";

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

Promise.all([
  d3.csv(
    "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
  ),
  d3.json(
    "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json"
  ),
]).then(([covid19Data, topoJSONdata]) => {
  console.log(covid19Data);
  console.log(topoJSONdata);

  //   build a reference table covid19 row county name using fips
  //   const countyName = {};
  //   covid19Data.forEach((d) => {
  //     countyName[d.id] = d.id;
  //   });

  const covidByFips = covid19Data.reduce((accumulator, d) => {
    // accumulator[d.id] = d.id;
    accumulator[d.fips] = d;
    return accumulator;
  }, {}); //initial value of accumulator

  const counties = topojson.feature(
    topoJSONdata,
    topoJSONdata.objects.counties
  );

  //attach covid19 row and assign it onto counties
  counties.features.forEach((d) => {
    Object.assign(d.properties, covidByFips[d.id]);
  });

  //data join
  //append
  g.selectAll("path")
    .data(counties.features)
    .enter()
    .append("path")
    .attr("class", "counties")
    .attr("d", pathGenerator)
    .append("title")
    .text((d) => d.properties.name);
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
