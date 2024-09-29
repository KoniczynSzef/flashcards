import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
    it("should render HomePage", () => {
        render(<HomePage />);

        const heroSection = screen.getByTestId("hero-section");
        expect(heroSection).toBeDefined();
    });
});
