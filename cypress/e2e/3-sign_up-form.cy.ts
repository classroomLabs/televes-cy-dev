/**
 * The sign-up form
 *     should have a form with 4 inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *     should mark all inputs as valid
 *   when the user fills the form incorrectly
 *     should disabled the submit button if the form is invalid
 *     should mark the username as invalid if it is empty
 *     should mark the username as invalid after clear it
 *     should not show an error for user before interaction
 *     should show an error for user name while invalid
 *     should mark the username as valid if it is not empty
 *     should mark the email as invalid if it is not an email
 *   when the user resets the form
 *     should clear the form when the reset button is clicked
 */
describe("The sign-up form", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit("http://localhost:4200/auth/sign-up");
  });
  it("should have a form with 4 inputs and a submit button disabled", () => {
    cy.get("form input").should("have.length", 4);
    cy.get("form button[type='submit']").should("be.disabled");
  });
  context("when the users fills the form correctly", () => {
    beforeEach(() => {
      cy.get("#username").clear().type("John Smith");
      cy.get("[type='email']").clear().type("JohnSmith@acme.com");
      cy.get("[type='password']").first().clear().type("1234a");
      cy.get("form [name='repeatPassword']").clear().type("1234a");
    });
    it("should allow to submit the form", () => {
      cy.get("form button[type='submit']").should("be.enabled");
    });
    it("should mark all inputs as valid", () => {
      cy.get("form input[aria-invalid='false']").should("have.length", 4);
    });
  });
  context("when the user fills the form incorrectly", () => {
    it("should disabled the submit button if the form is invalid", () => {
      cy.get("form button").should("be.disabled");
    });
    it("should mark the username as invalid if it is empty", () => {
      cy.get("#username").should("have.class", "ng-invalid");
    });
    it("should mark the username as invalid after clear it", () => {
      cy.get("#username").type("John");
      cy.get("#username").clear();
      cy.get("#username").should("have.class", "ng-invalid");
    });
    it("should not show an error for user before interaction", () => {
      cy.get("[data-test='username.error']").should("not.be.visible");
    });
    it("should show an error for user name while invalid", () => {
      cy.get("#username").clear().type("a");
      cy.get("[data-test='username.error']").should("be.visible");
    });
    it("should mark the username as valid if it is not empty", () => {
      cy.get("#username").clear().type("John");
      cy.get("#username").should("have.class", "ng-valid");
    });
    it("should mark the email as invalid if it is not an email", () => {
      cy.get('[type="email"]').clear().type("not-an-email");
      cy.get('[type="email"]').should("have.class", "ng-invalid");
    });
  });
  context("when the user resets the form", () => {
    it("should clear the form when the reset button is clicked", () => {
      // Arrange
      cy.get("#username").clear().type("John Smith");
      cy.get("[type='email']").clear().type("JohnSmith@acme.com");
      cy.get("[type='password']").first().clear().type("1234a");
      cy.get("form [name='repeatPassword']").clear().type("1234a");
      // Act
      cy.contains("button", "Reset").click();
      // Assert
      cy.get("#username").should("be.empty");
      cy.get('[type="email"]').should("be.empty");
      cy.get('[type="password"]').first().should("be.empty");
      cy.get('[name="repeatPassword"]').should("be.empty");
    });
  });
  afterEach(() => {
    cy.contains("button", "Reset").click();
  });
});
