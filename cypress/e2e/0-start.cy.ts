/**
 * The Activity Bookings home page
 *   should be visitable
 *   should have a header
 *   should have a header with 'Activity Bookings' text
 *   should contain '©' in the footer
 *   should have a link to 'https://albertobasalo.dev'
 *   should have an underline element with 'Course sample' content
 *   should have a link with css class 'secondary'
 */
describe("The Activity Bookings home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200");
  });
  it("should have a header", () => {
    cy.visit("http://localhost:4200");
    cy.get("header");
  });
  it("should have a header with 'Activity Bookings' text", () => {
    cy.visit("http://localhost:4200");
    cy.get("header").contains("Activity Bookings");
  });
  it("should contain '©' in the footer", () => {
    cy.visit("http://localhost:4200");
    cy.get("footer").contains("©");
  });
  it("should have a link to 'https://albertobasalo.dev'", () => {
    cy.visit("http://localhost:4200");
    cy.get('[href="https://albertobasalo.dev"]').should("exist");
  });
  it("should have an underline element with 'Course sample' content", () => {
    cy.visit("http://localhost:4200");
    cy.get("u").should("contain.text", "Course sample");
  });
  it("should have a link with css class 'secondary'", () => {
    cy.visit("http://localhost:4200");
    cy.get("a.secondary").should("exist");
  });
});
