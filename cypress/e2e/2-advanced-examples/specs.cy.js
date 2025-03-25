// Feature: Landing Page Navigation
describe("Landing Page Navigation", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Displays the landing page correctly", () => {
    cy.title().should("include", "Cypress.io: Kitchen Sink");

    cy.get("#navbar").should("be.visible");

    cy.get(".banner")
      .should("be.visible")
      .and("contain", "example app used to showcase Cypress.io");
  });
});

// Feature: Navigation Bar Interaction
describe("Navigation Bar Interaction", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Navigates the Commands link", () => {
    cy.get("#navbar").contains("Commands").click();

    cy.get(".dropdown-menu")
      .should("be.visible")
      .and("contain", "Querying")
      .and("contain", "Traversal")
      .and("contain", "Actions");
  });

  it("Navigates the Utilities link", () => {
    cy.get("nav").contains("Utilities").click();
    cy.url().should("include", "/utilities");
  });

  it("Navigates the Cypress API link", () => {
    cy.get("nav").contains("Cypress API").click();
    cy.url().should("include", "/cypress-api");
  });
});

// Feature: Landing Page Content
describe("Landing Page Content", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Viewing the Introduction banner", () => {
    cy.get(".banner").contains("Kitchen Sink").should("be.visible");

    cy.get(".banner")
      .contains("Cypress.io")
      .should("have.attr", "href", "https://www.cypress.io");

    cy.get(".banner")
      .contains("docs.cypress.io")
      .should("have.attr", "href", "https://docs.cypress.io");
  });

  // Feature: Landing Page Content (Continued)
  it("Exploring Commands section", () => {
    cy.get("#utilities").contains("Commands").should("be.visible");

    cy.get(".home-list").contains("Querying").should("be.visible");
    cy.get(".home-list").contains("Actions").should("be.visible");
    cy.get(".home-list").contains("Assertions").should("be.visible");
    cy.get(".home-list").contains("get").should("be.visible");
    cy.get(".home-list").contains("type").should("be.visible");
    cy.get(".home-list").contains("should").should("be.visible");

    cy.get(".home-list").contains("Querying").click();
    cy.url().should("include", "/querying");

    cy.get(".banner").contains("Querying");
  });
});

// Feature: External Links and Resources
describe("External Links and Resources", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("Accessing the GitHub repository", () => {
    cy.get("#navbar")
      .contains("GitHub")
      .should("have.attr", "href", "https://github.com/cypress-io/cypress-example-kitchensink");
  });

  it("Accessing the Cypress homepage", () => {
    cy.contains("cypress.io").should("have.attr", "href", "https://www.cypress.io/");
  });
});
  