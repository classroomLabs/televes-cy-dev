/**
 * Given the Published Activities list
 *   when the Home page is loaded
 *    then should show the number of activities
 *    then should have a link to the activity page
 *    then should list in a monospace font
 *    then should show activities name, price, and date
 */
describe("Given the Published Activities list", () => {
  const API_URL = `${Cypress.env("apiUrl")}/activities*`;
  const LIST_CONTENT = 'main[name="list-content"]';
  let activitiesCounter = 0;
  let firstSlug = "";
  beforeEach(() => {
    cy.fixture("activities").then((fixtureContent) => {
      const activities = fixtureContent as unknown as any[];
      const publishedActivities = activities.filter((a) => a.state === "published");
      activitiesCounter = publishedActivities.length;
      firstSlug = publishedActivities[0].slug;
      cy.intercept("GET", API_URL, {
        statusCode: 200,
        body: publishedActivities,
      }).as("getActivities");
    });
  });
  context("when the Home page is loaded", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(`${LIST_CONTENT}`).as("listContent");
      cy.get("@listContent").find("div").first().children('[name="title"]').as("firstTitle");
    });
    it("then should show the number of activities", () => {
      cy.get("[name='items-count']").should("contain.text", activitiesCounter);
      cy.get("[name='activity-item']").should("have.length", activitiesCounter);
    });
    it("then should have a link to the activity page", () => {
      cy.get("@firstTitle").children("a").should("have.attr", "href", `/activities/${firstSlug}`);
    });
    it("then should list in a monospace font", () => {
      cy.get("@firstTitle").should("have.css", "font-family", "monospace");
    });
  });
});
