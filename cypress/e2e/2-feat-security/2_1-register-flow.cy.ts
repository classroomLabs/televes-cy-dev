// import { NEW_USER } from "../../support/utils";

/**
 * Given a user at registration flow
 *  when sends valid new credentials
 *    should send the form data to the server
 *    should store the token in the local storage
 *    should redirect the user to the home page
 *    should display user menu
 *  when sends invalid new credentials
 *    should show an error dialog
 *    should display anonymous menu
 */
describe("Given a user at registration flow", () => {
  const PAGE_URL = "/auth/sign-up";
  const API_URL = `${Cypress.env("apiUrl")}/register`;
  let NEW_USER: any = null;
  let TOKEN: any = null;
  before(() => {
    cy.fixture("new-user").then((content) => (NEW_USER = content));
    cy.fixture("token").then((content) => (TOKEN = content));
  });
  context("when sends valid new credentials", () => {
    beforeEach(() => {
      cy.intercept("POST", API_URL, {
        statusCode: 201,
        body: TOKEN,
      }).as("postRegister");
      cy.visit(PAGE_URL);
      cy.get("#username").clear().type(NEW_USER.username);
      cy.get('[type="email"]').clear().type(NEW_USER.email);
      cy.get('[type="password"]').first().type(NEW_USER.password);
      cy.get('[name="repeatPassword"]').type(NEW_USER.password);
      cy.get("form button[type=submit]").click();
    });
    it("should send the form data to the server", () => {
      cy.wait("@postRegister");
      cy.get("@postRegister").its("request.body").should("deep.equal", NEW_USER);
    });
    it("should store the token in the local storage", () => {
      const storedToken = localStorage.getItem("user-access-token") || "";
      const actual = JSON.parse(storedToken);
      const expected = TOKEN;
      expect(actual).to.deep.equal(expected);
    });
    it("should redirect the user to the home page", () => {
      cy.url().should("equal", Cypress.config("baseUrl") + "/");
    });
    it("should display user menu", () => {
      cy.get("#user-menu").should("be.visible");
    });
  });
});
