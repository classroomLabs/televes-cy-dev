describe("The Activity Bookings home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have an h1", () => {
    cy.visit("http://localhost:4200/");
    cy.get("h1").should("exist");
  });
  it("should have an h1 with 'Activity Bookings' text", () => {
    cy.visit("http://localhost:4200/");
    cy.get("h1").contains("Activity Bookings");
  });
  it("should contains '© Alberto Basalo' in the footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer").contains("© Alberto Basalo");
  });
  it("should have a link to albertobasalo.dev", () => {
    cy.visit("http://localhost:4200/");
    cy.get('[href="https://albertobasalo.dev"]').should("exist");
  });
  it("should have an underline element with 'Course sample' content", () => {
    cy.visit("http://localhost:4200/");
    cy.get("u").contains("Course sample");
  });
  it("should have a link with css class 'secondary'", () => {
    cy.visit("http://localhost:4200/");
    cy.get("a.secondary").should("exist");
  });
});
