export function readData() {
  return d3.csv('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv')
    .then((data) => {
      const massData = data.filter(function (d) {
        return d.state === 'Massachusetts';
      });

      massData.forEach((d) => {
        d.date = new Date(d.date);
        d.cases = +d.cases;
        d.deaths = +d.deaths;
      });

      return massData;
    })
    .catch((error) => {
        console.log(error);
        console.log("Error:", error.message);
    });
  }
