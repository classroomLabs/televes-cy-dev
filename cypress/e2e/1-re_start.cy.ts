describe("The Activity Bookings home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  it("should be visitable", () => {
    cy.get("html").should("exist");
  });
  it("should have an h1", () => {
    cy.get("h1").should("exist");
  });
  it("should have an h1 with 'Activity Bookings' text", () => {
    cy.get("h1").should("have.text", "Activity Bookings");
  });
  it("should contain '© Alberto Basalo' in the footer", () => {
    cy.get("footer").contains("© Alberto Basalo");
  });
  it("should have a link to albertobasalo.dev", () => {
    cy.get('[href="https://albertobasalo.dev"]').should("exist");
  });
  it("should have an underline element with 'Course sample' content", () => {
    cy.get("u").contains("Course sample");
  });
  it("should have a link with css class 'secondary'", () => {
    cy.get("a.secondary").should("exist");
  });
});
