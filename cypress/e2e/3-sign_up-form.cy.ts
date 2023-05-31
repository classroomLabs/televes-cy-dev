describe("The sign-up form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/auth/sign-up");
  });
  context("when the users fills the form correctly", () => {
    it("should have a form with inputs and a submit button", () => {
      cy.get("form").should("exist");
      cy.get("form input").should("exist");
      cy.get("form button").should("exist");
    });
    it.only("should allow to submit the form", () => {
      cy.get("#username").clear().type("Alberto");
      cy.get('[type="email"]').clear().type("a@b.c");
      cy.get('[type="password"]').first().type("123a");
      cy.get('[name="repeatPassword"]').type("123a");
      cy.get("form button[type=submit]").should("be.enabled");
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
      cy.get("#username").type("Alberto");
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
      cy.get("#username").clear().type("Alberto");
      cy.get("#username").should("have.class", "ng-valid");
    });
    it("should mark the email as invalid if it is not an email", () => {
      cy.get('[type="email"]').clear().type("not-an-email");
      cy.get('[type="email"]').should("have.class", "ng-invalid");
    });
  });
  context("when the user resets the form", () => {
    it("should clear the form when the reset button is clicked", () => {
      cy.get("#username").clear().type("Alberto");
      cy.get('[type="email"]').clear().type("not-an-email");
      cy.get('[type="password"]').first().type("123a");
      cy.get('[name="repeatPassword"]').type("123a");
      cy.get("form button.contrast.outline").click();
      cy.get("#username").should("have.value", "");
      cy.get('[type="email"]').should("have.value", "");
      cy.get('[type="password"]').first().should("have.value", "");
      cy.get('[name="repeatPassword"]').should("have.value", "");
    });
  });
  afterEach(() => {
    cy.contains("button", "Reset").click();
  });
});
