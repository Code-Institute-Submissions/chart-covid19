//Data Table
export function readData() {
d3.csv(
  "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
)
  .then((data) => {
    // console.log(data);
    const MASSDATA = data.filter(function (d) {
      return d.state == "Massachusetts";
    });

    MASSDATA.forEach((d) => {
      d.date = new Date(d.date);
      d.cases = +d.cases;
      d.deaths = +d.deaths;
    });

    console.log(MASSDATA);
    // render(MASSDATA);
  })
  .catch((error) =>
    console.log("Error:", error.message)
  ); /* called when  there is an error anywhere and also takes a callback if there is an error*/
}
