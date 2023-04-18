import Stage from "./Stage";
import { render, screen } from "@testing-library/react";

test("Renders a div with a heading", () => {
  render(<Stage />);
  const testElement = screen.getByTestId("stage-component");
  expect(testElement).toContainHTML("h3");
});
