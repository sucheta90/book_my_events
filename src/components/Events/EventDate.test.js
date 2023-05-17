/* <EventDate date={props.date} className={styles.pointer_none} /> */
import EventDate from "./EventDate";
import { render, screen } from "@testing-library/react";

const month = jest.fn();
const day = jest.fn();
const year = jest.fn();

describe("Renders EventData with", () => {
  test("Function - month", () => {
    render(<EventDate date="props.date" className="someClass" />);
    const testComponent = screen.getByTestId("eventDate");
    expect(testComponent).toBeInTheDocument(month);
  });
  test("Function - day", () => {
    render(<EventDate date="props.date" className="someClass" />);
    const testComponent = screen.getByTestId("eventDate");
    expect(testComponent).toBeInTheDocument(day);
  });
  test("Function - year", () => {
    render(<EventDate date="props.date" className="someClass" />);
    const testComponent = screen.getByTestId("eventDate");
    expect(testComponent).toBeInTheDocument(year);
  });
});
