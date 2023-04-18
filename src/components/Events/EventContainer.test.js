import EventContainer from "./EventContainer";
import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { act } from "react-dom/test-utils";

//mocked EventItem
const mockEventItem = jest.fn();
jest.mock("./EventItem", () => (props) => {
  mockEventItem(props);
  return (
    <mock-EventItem>
      <button onClick={props.onClick} data-testid="moreInfo-btn">
        More info
      </button>
    </mock-EventItem>
  );
});

//mocked EventDetails
const mockEventDeatils = jest.fn();
jest.mock("./EventDetails", () => (props) => {
  mockEventDeatils(props);
  return (
    <mock-eventDetails>
      <button onClick={props.bookNowHandler} data-testid="bookNow-btn">
        Book now
      </button>
    </mock-eventDetails>
  );
});

//mocked SeatBooking
const mockSeatBooking = jest.fn();
jest.mock("../SeatBooking/SeatBooking", () => (props) => {
  mockSeatBooking(props);
  return <mock-seatBooking></mock-seatBooking>;
});

describe("Renders EventContainer", () => {
  test("Renders EventItem if no state is set", () => {
    render(<EventContainer key="some-key" id="some-id" event="some-event" />);
    //   const parentComponent = screen.getByTestId("parent-div");
    expect(mockEventItem).toHaveBeenCalledTimes(1);
    expect(mockEventDeatils).not.toHaveBeenCalledTimes(1);
    expect(mockSeatBooking).not.toHaveBeenCalledTimes(1);
  });

  test("Renders EventDetails on button click from EventItem", () => {
    render(<EventContainer key="some-key" id="some-id" event="some-event" />);
    const button = screen.getByTestId("moreInfo-btn");
    act(() => {
      button.click();
    });

    expect(mockEventDeatils).toHaveBeenCalledTimes(1);
  });
});

test("Renders SeatBooking component onClick event from EventDetails", () => {
  render(<EventContainer key="some-key" id="some-id" event="some-event" />);
  const moreInfoBtn = screen.getByTestId("moreInfo-btn");
  act(() => {
    moreInfoBtn.click();
  });
  expect(mockEventDeatils).toHaveBeenCalledTimes(1);
  const bookNowBtn = screen.getByTestId("bookNow-btn");
  act(() => {
    bookNowBtn.click();
  });
  expect(mockSeatBooking).toHaveBeenCalledTimes(1);
});
