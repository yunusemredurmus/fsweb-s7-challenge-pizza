/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('.type() - type into a DOM element', () => {
    cy.get('#main-button').click();
    cy.get('#btn0')
      .click();
    cy.wait(500);
    cy.get('#kart2 > #btn1')
      .click();
    cy.wait(500);
    cy.get('#kart3 > #btn1')
      .click();
    cy.wait(500);

    cy.get(':nth-child(4) > .navbar > .nav2 > :nth-child(1)')// Navigasyon menüsünün CSS veya XPath seçicisini buraya girin
      .first()
      .trigger('mouseover') // İlk menü öğesine fareyi getirin
      .should('have.class', "nav-item"); // Hover durumunda olması gereken bir CSS sınıfını buraya girin veya istediğiniz doğrulama adımlarını ekleyin

    cy.wait(500);

    cy.get('[href="/siparisver/1"]') // Ürün bağlantısının CSS veya XPath seçicisini buraya girin
      .click();

    cy.wait(500);

    cy.url()
      .should('include', '/siparisver/1');


    cy.get('#boyut > form > :nth-child(1) > label > input')
      .check()
      .should('be.checked');

    cy.get('#sipbu')
      .click()
    cy.get('.error')
      .should('contain', 'En az 1 malzeme seçmelisiniz.');
    cy.wait(500)

    cy.get(':nth-child(1) > #checkmalz')
      .check()
      .should('be.checked')
    cy.wait(500)

    cy.get('#sipbu')
      .click()
    cy.get('.error')
      .should('contain', 'Sipariş notu zorunludur.');
    cy.wait(500)


    cy.get('#txtbut')
      .type("Siparişim hızlı gelsin :)")
      .should('have.value', "Siparişim hızlı gelsin :)")

    cy.wait(500)

    cy.get('#sipbu')
      .click()

    cy.url()
      .should('include', '/confirmorder');

    cy.get('#lezzetyol')
      .should('contain', 'lezzetin yolda');

    cy.wait(500)

    cy.get('#ad')
      .should('contain', 'Position Absolute Pizza');

    cy.wait(500)

    cy.get('#icerikpizza > :nth-child(3)')
      .should('contain', 'Pepperoni');

  });

});