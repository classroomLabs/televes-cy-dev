const API_URL = "http://localhost:3000/activities";
describe("The Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  context("when page is loading data", () => {
    beforeEach(() => {
      cy.intercept("GET", API_URL, {
        delay: 1000,
      });
    });
    it("should show a loading message", () => {
      cy.get("aside[aria-busy='true']").should("exist");
    });
    it("should not show an error dialog", () => {
      cy.get("#error-dialog").should("not.exist");
    });
    it("should not show data", () => {
      cy.get("article[name='Activity list']").should("not.exist");
    });
  });
  context("when there is an error", () => {
    beforeEach(() => {
      cy.intercept("GET", API_URL, {
        statusCode: 400,
      });
    });
    it("should show an error dialog", () => {
      cy.get("#error-dialog").should("be.visible");
    });
    it("should not show a loading message", () => {
      cy.get("aside[aria-busy='true']").should("not.exist");
    });
    it("should not show data", () => {
      cy.get("article").should("not.exist");
    });
    afterEach(() => {
      cy.get(".close").click();
    });
  });
  context("when no data arrives", () => {
    beforeEach(() => {
      cy.intercept("GET", API_URL, {
        body: [],
      });
    });
    it("should show a no data message", () => {
      cy.get("article[name='Activity list']").should("contain.text", "No data");
    });
    it("should not show an error dialog", () => {
      cy.get("#error-dialog").should("not.exist");
    });
    it("should not show a loading message", () => {
      cy.get("aside[aria-busy='true']").should("not.exist");
    });
  });
  context("when data arrives", () => {
    beforeEach(() => {
      cy.intercept("GET", API_URL, {
        body: [{ id: 1, name: "Activity 1" }],
      });
    });
    it("should have an unordered list", () => {
      cy.get("ul").should("exist");
    });
    it("should not show an error dialog", () => {
      cy.get("#error-dialog").should("not.exist");
    });
    it("should not show a loading message", () => {
      cy.get("aside[aria-busy='true']").should("not.exist");
    });
  });
});
