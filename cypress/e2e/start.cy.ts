describe("The Activity Bookings home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a title", () => {
    cy.visit("http://localhost:4200/");
    cy.get("h1").should("exist");
  });
  it("should have a title with 'Activity Bookings'", () => {
    cy.visit("http://localhost:4200/");
    cy.get("h1").should("have.text", "Activity Bookings");
  });
});
