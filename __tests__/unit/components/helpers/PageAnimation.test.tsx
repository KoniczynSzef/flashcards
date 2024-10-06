import { PageAnimation } from "@/components/helpers/PageAnimation";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("PageAnimation", () => {
    it("should render PageAnimation", () => {
        render(
            <PageAnimation>
                <div data-testid="test-div">Test</div>
            </PageAnimation>,
        );

        const wrapper = screen.getByTestId("home-page");
        const testDiv = screen.getByTestId("test-div");

        expect(wrapper).toBeDefined();
        expect(testDiv).toBeDefined();
    });
});
