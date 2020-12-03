import { readData } from "./loadData.js";

// Test to validate data load has at least one row
QUnit.test("Test Data Read URL link to New York Times COVID19 Data", function (
  assert
) {
  let promise = readData();

  return promise.then((d) => {
    assert.ok(Boolean(d.length > 0), "Data Read");
  });
});
