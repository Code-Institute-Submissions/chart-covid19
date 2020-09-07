// import { feature } from 'topojson';

export const loadAndProcessData = () =>
  Promise.all([
    d3.csv(
      "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
    ),
    d3.json(
      "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/counties-albers-10m.json"
    ),
  ]).then(([covid19Data, topoJSONdata]) => {
    const covidByFips = covid19Data.reduce((accumulator, d) => {
      if (!accumulator.hasOwnProperty(d.fips)) {
        accumulator[d.fips] = {};
      }
      accumulator[d.fips][d.date] = d;
      return accumulator;
    }, {}); //initial value of accumulator

    const counties = topojson.feature(
      topoJSONdata,
      topoJSONdata.objects.counties
    );

    //attach covid19 row and assign it onto counties
    counties.features.forEach((d) => {
      d.properties.dates = {};
      Object.assign(d.properties.dates, covidByFips[d.id]);
    });

    return counties;
  });
