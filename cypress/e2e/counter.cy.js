/// <reference types="Cypress"/>
// Above Syntax is for getting auto Suggestions

describe("Checking Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  // it("Should exist in the Document", () => {
  //   cy.get("h2").should("exist");
  //   cy.get(".Inc_btn").should("exist");
  //   cy.get(".Dec_btn").should("exist");
  // });

  // it("should increment Counter", () => {
  //   cy.get("h2").should("have.text", "Count is 0");
  //   cy.get(".Inc_btn").click();
  //   cy.get("h2").should("have.text", "Count is 1");
  // });

  // it("should increment Counter", () => {
  //   cy.get("h2").should("have.text", "Count is 0");
  //   cy.get(".Inc_btn").click();
  //   cy.get(".Inc_btn").click();
  //   cy.get(".Inc_btn").click();
  //   cy.get(".Inc_btn").click();
  //   cy.get("h2").should("have.text", "Count is 4");
  // });

  it("should intercept GET request", () => {
    cy.intercept("GET", "http://localhost:8080/counter", {
      value: 10,
    }).as("getReq"); //spying

    cy.wait("@getReq").should((data) => {});
  });

  it("should intercept POST request", () => {
    cy.intercept("GET", "http://localhost:8080/counter", {
      fixture: "counter.json",
    }).as("getReq");
    cy.intercept("POST", "http://localhost:8080/counter", {
      value: 100,
    }).as("postReq");

    cy.wait("@getReq");
    cy.get(".Inc_btn").click();
    cy.wait("@postReq").then((r) => {
      console.log("XLRI data", r);
    });
  });
});
