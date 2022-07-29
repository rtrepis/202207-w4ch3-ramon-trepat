import { render, screen } from "@testing-library/react";
import Actions from "./Actions";

describe("Given an action component", () => {
  describe("When we instantiate with a isCall variable false", () => {
    test("Then it should show a button call", () => {
      const isCall = true;

      render(<Actions />);
      const link = screen.getByRole("link", {});

      expect(link).toBeInTheDocument();
    });
  });
});
