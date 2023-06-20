/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

export const TOKEN_KEY = "user-access-token";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("loginUI", (username, email, password) => {
  cy.get("#username").clear().type(username);
  cy.get('[type="email"]').clear().type(email);
  cy.get('[type="password"]').first().type(password);
  cy.get('[name="repeatPassword"]').type(password);
  cy.get("form button[type=submit]").click();
});
Cypress.Commands.add("login", () => {
  cy.fixture("token").then((token) => localStorage.setItem(TOKEN_KEY, JSON.stringify(token)));
});
Cypress.Commands.add("logout", () => {
  // localStorage.removeItem(TOKEN_KEY);
  cy.window().its("localStorage").invoke("removeItem", TOKEN_KEY);
});
//
// Cypress.Commands.add("registerUIplus", () => {
//   const AUTH_URL = "/auth/sign-up";
//   const API_AUTH_URL = `${Cypress.env("apiUrl")}/register`;
//   cy.fixture("new-user").then((NEW_USER) => {
//     cy.intercept("POST", API_AUTH_URL, {
//       statusCode: 201,
//       fixture: "token",
//     }).as("postRegister");
//     cy.visit(AUTH_URL);
//     cy.registerUI(NEW_USER.username, NEW_USER.email, NEW_USER.password);
//   });
// });

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
  namespace Cypress {
    interface Chainable {
      loginUI(username: string, email: string, password: string): Chainable<void>;
      login(): Chainable<void>;
      logout(): Chainable<void>;
    }
  }
}
