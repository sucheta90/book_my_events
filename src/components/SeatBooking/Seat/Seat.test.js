import { render, screen } from "@testing-library/react";
import Seat from "./Seat";

describe("Testing Seat component to check", () => {
  test("When seat status is occupied, class shoul be set as occupied", () => {
    render(<Seat status="occupied" />);
    const seatComponent = screen.getByTestId("seat-component");
    //const style = window.getComputedStyle(seatComponent);

    expect(seatComponent).toHaveClass("occupied");
  });
  test("When seat id matches, id's in the occupied seat id list, component to have className occupied", () => {
    //   const arrayId = ["a1", "b2", "c3"];
    const seatId = "c3";

    render(<Seat occupiedSeats={["a1", "b2", "c3"]} id={seatId} />);
    const seatComponent = screen.getByTestId("seat-component");

    expect(seatComponent).toHaveClass("occupied");
  });

  test("When seat id matches, id's in the selected seat id list, component to have className selected", () => {
    const selectedSeatIds = ["a1", "b2", "c3", "d4"];
    render(
      <Seat
        selectedSeats={selectedSeatIds}
        id="d4"
        occupiedSeats={["a1", "b2", "c3"]}
      />
    );
    const seatComponent = screen.getByTestId("seat-component");
    expect(seatComponent).toHaveClass("selected");
  });
  test("When seat id doesn't matche, id's in the selected/occupied seat id list, component to have className available", () => {
    const selectedSeatIds = ["a1", "b2", "c3", "d4"];
    render(
      <Seat
        selectedSeats={selectedSeatIds}
        id="d7"
        occupiedSeats={["a1", "b2", "c3"]}
      />
    );
    const seatComponent = screen.getByTestId("seat-component");
    expect(seatComponent).toHaveClass("available");
  });
});
