// import { select, json, geoPath, geoNaturalEarth1, zoom, event} from 'd3';
// import { feature } from 'topojson';

const svg = d3.select("svg");

const projection = d3.geoAlbers();
const pathGenerator = d3.geoPath().projection(null);

svg.call(d3.zoom().on('zoom', () => {
    console.log('zoom');
    g.attr('transform', d3.event.transform);
}));

const g = svg.append('g');

d3.json(
  "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json"
).then((data) => {
  //   console.log(data);
  const counties = topojson.feature(data, data.objects.counties);
  //   console.log(counties.properties);

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
});
