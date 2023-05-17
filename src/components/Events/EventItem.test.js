import EventItem from "./EventItem";
import { render } from "@testing-library/react";

const mockCardComponent = jest.fn();
jest.mock("../UI/Card", () => (props) => {
  mockCardComponent(props);
  return <mock-card />;
});

const mockEventDate = jest.fn();
jest.mock("./EventDate", () => (props) => {
  mockEventDate(props);
  return <mock-eventDate></mock-eventDate>;
});

const showDetail = jest.fn();
const show = jest.fn();

test("Render calls Card component once", () => {
  render(
    <EventItem
      id="id"
      title="title"
      date="date"
      time="time"
      location="location"
      city="city"
      state="state"
      redClass="redClass"
      greenClass="greenClass"
      blueClass="blueClass"
      eventItem="eventItem"
      onClick={showDetail}
      toShow={show}
    />
  );
  expect(mockCardComponent).toHaveBeenCalledTimes(1);
});
