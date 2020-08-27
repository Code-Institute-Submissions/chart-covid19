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
    //   console.log(covid19Data);
    //   console.log(topoJSONdata);

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

    return counties;
  });
