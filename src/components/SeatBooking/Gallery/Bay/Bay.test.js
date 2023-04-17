import Bay from "./Bay";

import { render, screen } from "@testing-library/react";
// import Column from "./Column";

const mockColumnComponent = jest.fn();
jest.mock("./Column", () => (props) => {
  mockColumnComponent(props);
  return <mock-column>{props.className}</mock-column>;
});

test("Checking number of calls made for Columns", () => {
  render(<Bay />);
  expect(mockColumnComponent).toHaveBeenCalledTimes(9);
});

test("Checking count of Coloums with class of RED", () => {
  render(<Bay />);
  const testComponent = screen.getAllByText("red");
  expect(testComponent).toHaveLength(3);
});
