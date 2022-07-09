/// <reference types="Cypress"/>
// Above Syntax is for getting auto Suggestions

describe("Checking Todos Application", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("Should have the basic Structure", () => {
    // input Box is Present
    cy.get(".new-todo").should("exist");
    // if Todo Count is Present
    cy.get(".todo-count").should("exist");
    // filter todo
    cy.get(".filters").should("exist");
  });

  it("Should be Able to Start", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".new-todo").type("Learn Redux{enter}");
    cy.get(".new-todo").type("Learn Cypress{enter}");
    cy.get(".todo-list").children().should("have.length", 5);
  });

  it("Should be able to increase task length in footer", () => {
    cy.get(".todo-count strong").should("have.text", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".new-todo").type("Learn Redux{enter}");
    cy.get(".todo-count strong").should("have.text", 4);
  });
});
