import { Hero } from "@/components/hero/Hero";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Hero", () => {
    it("should render Hero", () => {
        render(<Hero />);

        const hero = screen.getByTestId("hero-section");

        expect(hero).toBeDefined();
    });

    it("should display all hero items", () => {
        const title = screen.getByTestId("hero-title");
        const description = screen.getByTestId("hero-description");
        const cta = screen.getByTestId("hero-link-cta");
        const button = screen.getByTestId("hero-button");

        expect(title).toBeDefined();
        expect(description).toBeDefined();
        expect(cta).toBeDefined();
        expect(button).toBeDefined();
    });
});
