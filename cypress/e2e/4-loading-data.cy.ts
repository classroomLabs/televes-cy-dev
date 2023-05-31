describe("The Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  context("when page is loading data", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3000/activities", {
        delay: 1000,
        body: [],
      }).as("getActivities");
    });
    it("should show a loading message", () => {
      cy.get("[aria-busy='true']").should("have.text", "Loading...");
    });
    it("should not show an error dialog", () => {
      cy.get("dialog").should("not.exist");
    });
  });
  context("when there is an error", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3000/activities", {
        statusCode: 400,
      }).as("getActivities");
    });
    it("should show an error dialog", () => {
      cy.get("dialog").should("be.visible");
    });
    it("should not show a loading message", () => {
      cy.get("[aria-busy='true']").should("not.exist");
    });
    afterEach(() => {
      cy.get(".close").click();
    });
  });
  context("when no data arrives", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3000/activities", {
        body: [],
      }).as("getActivities");
    });
    it("should show a no data message", () => {
      cy.get("aside").should("have.text", "No data!");
    });
    it("should not show an error dialog", () => {
      cy.get("dialog").should("not.exist");
    });
    it("should not show a loading message", () => {
      cy.get("[aria-busy='true']").should("not.exist");
    });
  });
  context("when data arrives", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3000/activities", {
        body: [{ id: 1, name: "Activity 1" }],
      }).as("getActivities");
    });
    it("should have an unordered list", () => {
      cy.get("ul").should("exist");
    });
    it("should not show an error dialog", () => {
      cy.get("dialog").should("not.exist");
    });
    it("should not show a loading message", () => {
      cy.get("[aria-busy='true']").should("not.exist");
    });
  });
});
