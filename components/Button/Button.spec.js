import { render, screen } from "@testing-library/react";
import Button from "./index";

test("button", () => {
  render(<Button>HELLO</Button>);
  expect(screen.getByText("HELLO")).toBeInTheDocument();
});
