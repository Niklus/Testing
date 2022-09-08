import { sayHi } from "../index.js";

describe("The sayHi() method", function () {
  test("it returns a string", function () {
    expect(typeof sayHi()).toBe("string");
  });

  test("it includes the provided name", function () {
    expect(sayHi("Merlin")).toContain("Merlin");
  });

  test("it has a value when no name is included", function () {
    expect(sayHi()).not.toHaveLength(0);
  });
});

/* Run the test without the describe function
test("Returns a greeting as a string", function () {
  // should return a string
  expect(typeof sayHi()).toBe("string");

  // should include the provided name
  expect(sayHi("Merlin").includes("Merlin")).toBe(true);

  // should have a value when no name is included
  expect(sayHi()).toBeTruthy();

});*/

// https://jestjs.io/docs/expect
