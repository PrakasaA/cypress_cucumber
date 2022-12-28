import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  Given("user open website zeroBank", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });

  When("user submit sign in button", () => {
    cy.get("#signin_button").click();
  });

  Then("user open login.html page", () => {
    cy.get('h3').should("contain.text", "Log in to ZeroBank");
  });

  When("user submit login {string}", (username) => {
    cy.get("#user_login").clear()
    cy.get("#user_login").type(username);
  });

  When("user submit password {string}", (password) => {
    cy.get("#user_password").clear()
    cy.get("#user_password").type(password);
  });

  When("user click sign in button", () => {
    cy.get('input[value="Sign in"]').click();
  });

  Then("user get to index.html page", () => {
    cy.get('a').should("contain.text", "Zero Bank");
  });
