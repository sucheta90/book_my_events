import Errorwindow from "./Errorwindow";
import { render, screen } from "@testing-library/react";

test("Renders error message when an error occurs", () => {
  render(<Errorwindow errorMessage="some error" />);
  const testComponent = screen.getByTestId("error-component");
  const content = testComponent.innerHTML;

  expect(content).toMatch("some error");
});
