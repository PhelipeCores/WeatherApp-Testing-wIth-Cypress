





describe('Search Test', () => {
  beforeEach(() => {
     cy.visit('http://127.0.0.1:5500/Weather%20App/index.html')
  });


  it('Should provide results for Berlin', () => {
cy.
getDataTest('Search-Bar').type('Berlin {enter}');
cy.
getDataTest('humidity').contains('Humidity');
cy.
getDataTest('wind').contains('Wind');
cy.
getDataTest('description');
cy.
getDataTest("Body-image")
 .should("have.css", "background-image").and("include", "https://source.unsplash.com/1600x900/?landscape");
     

cy.getDataTest('temperature').should(($element) => {
    const text = $element.text();
    expect(/^\d+(\.\d+)?$/.test(text)).to.be.false;
  });


  cy.wait(5000);

});





it('Should provide results for Helsinki', () => {
cy.
getDataTest('Search-Bar').type('Helsinki {enter}');
cy.
getDataTest('humidity').contains('Humidity');
cy.
getDataTest('wind').contains('Wind');
cy.
getDataTest('description');
cy.
getDataTest("Body-image")
 .should("have.css", "background-image").and("include", "https://source.unsplash.com/1600x900/?landscape");
   cy.wait(5000);

});





it('Should provide results for Rio De Janeiro', () => {
cy.
getDataTest('Search-Bar').type('Rio De Janeiro {enter}');
cy.
getDataTest('humidity').contains('Humidity');
cy.
getDataTest('wind').contains('Wind');
cy.
getDataTest('description');
cy.
getDataTest("Body-image")
 .should("have.css", "background-image").and("include", "https://source.unsplash.com/1600x900/?landscape");


 cy.getDataTest('temperature').should(($element) => {
    const text = $element.text();
    expect(/^\d+(\.\d+)?$/.test(text)).to.be.false;
  });

   cy.wait(5000);

});



it('Should provide results for Lisbon', () => {
cy.
getDataTest('Search-Bar').type('Lisbon {enter}');
cy.
getDataTest('humidity').contains('Humidity');
cy.
getDataTest('wind').contains('Wind');
cy.
getDataTest('description');
cy.
getDataTest("Body-image")
 .should("have.css", "background-image").and("include", "https://source.unsplash.com/1600x900/?landscape");



 cy.getDataTest('temperature').should(($element) => {
    const text = $element.text();
    expect(/^\d+(\.\d+)?$/.test(text)).to.be.false;
  });
 
 

});


});