import EventDetails from "./EventDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

//mocked SeatBooking
const mockSeatBooking = jest.fn();
jest.mock("../SeatBooking/SeatBooking", () => (props) => {
  mockSeatBooking(props);
  return <mock-seatBooking></mock-seatBooking>;
});
const mockEventContainer = jest.fn();
jest.mock("./EventContainer", () => (props) => {
  mockEventContainer(props);
  return (
    <mock-eventContainer data-testid="eventContainer">
      <mock-seatBooking data-testId="seatBooking"></mock-seatBooking>
    </mock-eventContainer>
  );
});
const handleClick = jest.fn();
test("Renders content on button click", () => {
  render(
    <EventDetails
      hideDetailHandler="some-handler"
      bookNowHandler={handleClick}
      event="eventDetails"
    />
  );
  const button = screen.getByTestId("bookNow-btn");
  act(() => {
    button.click();
  });
  expect(handleClick).toHaveBeenCalled();
});
