import { render } from "@testing-library/react";
import Gallery from "./Gallery";

const mockBayComponent = jest.fn();
jest.mock("./Bay/Bay", () => (props) => {
  mockBayComponent(props);
  return <mock-bay></mock-bay>;
});
const mockStageComponent = jest.fn();
jest.mock("./Stage/Stage", () => (props) => {
  mockStageComponent(props);
  return <mock-stage></mock-stage>;
});

test("Renders a div with nested child components -  Bay", () => {
  render(<Gallery />);
  expect(mockBayComponent).toHaveBeenCalledTimes(3);
});
test("Renders a div with nested child components -  Stage", () => {
  render(<Gallery />);
  expect(mockStageComponent).toHaveBeenCalledTimes(1);
});
