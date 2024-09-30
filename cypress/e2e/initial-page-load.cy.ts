describe("initial page load", () => {
    it("should load home page", () => {
        cy.visit("http://localhost:3000");

        cy.title().should("eq", "LangCards");
    });

    it("should have a navbar", () => {
        cy.get("nav").should("exist");
    });
});
