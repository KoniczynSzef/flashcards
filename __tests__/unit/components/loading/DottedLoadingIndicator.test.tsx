import { DottedLoadingIndicator } from "@/components/loading/DottedLoadingIndicator";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("DottedLoadingIndicator", () => {
    it("should render DottedLoadingIndicator", () => {
        render(<DottedLoadingIndicator />);

        const loading = screen.getByTestId("dotted-loading-indicator");

        expect(loading).toBeDefined();
    });

    it("should display all loading dots", () => {
        const dots = screen.getAllByTestId("loading-dot");

        expect(dots).toHaveLength(3);
    });

    it("should animate loading dots", async () => {
        render(<DottedLoadingIndicator />);

        const dots = screen.getAllByTestId("loading-dot");

        expect(dots[0].getAttribute("data-current-dot")).toBe("true");
        expect(dots[1].getAttribute("data-current-dot")).toBe("false");
        expect(dots[2].getAttribute("data-current-dot")).toBe("false");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        expect(dots[0].getAttribute("data-current-dot")).toBe("false");
        expect(dots[1].getAttribute("data-current-dot")).toBe("true");
        expect(dots[2].getAttribute("data-current-dot")).toBe("false");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        expect(dots[0].getAttribute("data-current-dot")).toBe("false");
        expect(dots[1].getAttribute("data-current-dot")).toBe("false");
        expect(dots[2].getAttribute("data-current-dot")).toBe("true");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        expect(dots[0].getAttribute("data-current-dot")).toBe("true");
        expect(dots[1].getAttribute("data-current-dot")).toBe("false");
        expect(dots[2].getAttribute("data-current-dot")).toBe("false");
    });
});
