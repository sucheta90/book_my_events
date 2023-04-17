import Column from "./Column";
import { render } from "@testing-library/react";
import Seat from "../../Seat/Seat";

const mockSeatComponent = jest.fn();
jest.mock("../../Seat/Seat", () => (props) => {
  mockSeatComponent(props);
  return <mock-seat></mock-seat>;
});

test("Checking number of seats per column", () => {
  render(<Column />);
  expect(mockSeatComponent).toHaveBeenCalledTimes(6);
});
