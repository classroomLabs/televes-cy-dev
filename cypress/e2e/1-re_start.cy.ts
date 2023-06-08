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
  beforeEach(() => {
    // Arrange
    cy.visit("http://localhost:4200");
  });
  it("should be visitable", () => {
    // Act Assert
    cy.get("html");
  });
  it("should have a header", () => {
    // Act Assert
    cy.get("header");
  });
  it("should have a header with 'Activity Bookings' text", () => {
    cy.get("header") // Act
      .contains("Activity Bookings"); // Assert
  });
  it("should contain '©' in the footer", () => {
    cy.get("footer").contains("©");
  });
  it("should have a link to 'https://albertobasalo.dev'", () => {
    cy.get('[href="https://albertobasalo.dev"]').should("exist");
  });
  it("should have an underline element with 'Course sample' content", () => {
    cy.get("u").should("contain.text", "Course sample");
  });
  it("should have a link with css class 'secondary'", () => {
    cy.get("a.secondary").should("exist");
  });
});
