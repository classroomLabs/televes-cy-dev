import { RegisterPage } from "../../support/pages/register.page";

/**
 * Given an already registered and logged user
 *  when visits the home page
 *   should display user menu
 *   should send the token to the server
 */
describe("Given an already registered and logged user", () => {
  beforeEach(() => {
    // let TOKEN: any = null;
    // cy.fixture("token").then((content) => (TOKEN = content));
    // cy.fixture("new-user").then((content) => {
    //   const API_URL = `${Cypress.env("apiUrl")}/register`;
    //   cy.intercept("POST", API_URL, {
    //     statusCode: 201,
    //     body: TOKEN,
    //   }).as("postRegister");
    //   cy.visit("/auth/sign-up");
    //   cy.loginUI(content.username, content.email, content.password);
    //   cy.wait("@postRegister");
    // });
    cy.login();
  });
  context("when visits the home page", () => {
    const PAGE_URL = "";
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should display user menu", () => {
      cy.get("#user-menu").should("be.visible");
    });
  });
  afterEach(() => {
    cy.logout();
  });
});

/**
 * Given a secured endpoint returning 401
 *  when the user visits a page calling it
 *   should be redirected to the register page
 */
describe("Given a secured endpoint returning 401", () => {
  const REGISTER_URL = "/auth/sign-up";
  const PAGE_URL = "/activities/mines";
  const API_URL = `${Cypress.env("apiUrl")}/activities/?userId=`;
  beforeEach(() => {
    cy.intercept("GET", API_URL, {
      statusCode: 401,
      body: "Unauthorized",
    }).as("getSecuredApi");
  });
  context("when the user visits a page calling it", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should be redirected to the register page", () => {
      cy.wait("@getSecuredApi");
      cy.url().should("equal", REGISTER_URL);
    });
  });
});

describe("Given the Register Page", () => {
  const registerPage = new RegisterPage();
  context("when the user visits a page calling it", () => {
    beforeEach(() => {
      registerPage.visit();
    });
    it("fill the register page", () => {
      registerPage.setUserName("John");
    });
  });
});
