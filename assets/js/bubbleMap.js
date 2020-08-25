// import { select, json, geoPath, geoNaturalEarth1 } from 'd3';
// import { feature } from 'topojson';

const svg = d3.select("svg");

const projection = d3.geoAlbers();
const pathGenerator = d3.geoPath().projection(null);

d3.json(
  "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json"
).then((data) => {
  console.log(data);
  const counties = topojson.feature(data, data.objects.counties);
  console.log(counties);

  //data join
  const path = svg.selectAll("path").data(counties.features);
  //append
  path.enter().append("path").attr("d", pathGenerator);

  //   const states = 25;
});
