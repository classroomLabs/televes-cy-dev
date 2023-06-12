/**
 * The Activity Bookings navigation links
 *   should have a link to the repository page
 *   should have a header link with 'sign-up' text
 *   should navigate to the 'sign-up' page
 */
describe("The Activity Bookings navigation links", () => {
  let SIGN_UP: string;
  before(() => {
    cy.log("1 - Before ALL");
  });
  beforeEach(() => {
    cy.log("2 - Before EACH");
    // Arrange
    SIGN_UP = "sign-up";
    const PAGE_URL = "http://localhost:4200";
    cy.visit(PAGE_URL);
  });

  it("should have a link to the repository page", () => {
    const REPO_URL = "https://github.com/AlbertoBasalo/ng-dev";
    cy.get(`a[href="${REPO_URL}"]`);
  });
  it("should have a header link with 'sign-up' text", () => {
    cy.get(`header a`).should("have.text", "🔏 Sign up");
  });
  it("should navigate to the 'sign-up' page", () => {
    cy.get(`header a`) // Arrange
      .click(); // Act
    // cy.debug();
    cy.url().should("contain", SIGN_UP); // Assert
  });

  afterEach(() => {
    cy.log("3 - After EACH");
    // Arrange
    SIGN_UP = "sign-up";
    const PAGE_URL = "http://localhost:4200";
    cy.visit(PAGE_URL);
  });
  after(() => {
    cy.log("4 - After ALL");
  });
});
