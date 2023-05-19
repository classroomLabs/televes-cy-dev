describe("The Activity Bookings home page", () => {
  it("should exist", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a title", () => {
    cy.get("h1").should("contain", "Activity Bookings");
  });
});
