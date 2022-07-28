import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an action component", () => {
  describe("When we instantiate with a 'paco' text", () => {
    test("Then it should show a link with 'paco' text", () => {
      const alinkText = "paco";

      render(<Action text={alinkText} />);
      const link = screen.getByRole("link", { name: alinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
