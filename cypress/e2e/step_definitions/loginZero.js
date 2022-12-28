import {
    Given,
    When,
  } from "@badeball/cypress-cucumber-preprocessor";


    Given("user open website Zero Bank", () => {
        cy.visit("http://zero.webappsecurity.com/index.html");

    });

    When("user input on searchbox {string}", (money) => {
        cy.get("#searchTerm").clear()
        cy.get("#searchTerm").type(money).type('{enter}');
          
    });

    When("user get Search Result page", ()=>{
        cy.get("h2").should("contain.text", "Search Results:");
    });