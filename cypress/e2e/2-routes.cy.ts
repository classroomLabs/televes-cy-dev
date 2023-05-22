describe("The Activity Bookings navigation links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a link to the repository page", () => {
    cy.get('[href="https://github.com/AlbertoBasalo/ng-dev"]').should("exist");
  });
  it("should have a header link with 'sign-up' text", () => {
    cy.get("header>nav a").contains("Sign up");
  });
  it("should navigate to the sign-up page", () => {
    cy.get("header>nav a").contains("Sign up").click();
    cy.url().should("include", "auth/sign-up");
  });
});
