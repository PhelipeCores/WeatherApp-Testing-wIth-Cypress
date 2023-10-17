



describe('test description', () => {
 beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Weather%20App/index-logIn.html')
 cy.getDataTest("log-in-h1").contains("Login Page")
 });



it('Log In Test Wrong Credentials, wrong user', () => {

  
  cy.getDataTest
  ("UserTest").type('user-2-test@email.com ')
  cy.getDataTest
  ("UserPassword").type("12345TEST")
  cy.getDataTest
  ('logInButton').click()
  document.body.setAttribute('data-login-status', 'fail');


 
});


 it('Log In Test Wrong Credentials, wrong password', () => {
  cy.getDataTest
  ("UserTest").type('user-1@email.com')
  cy.getDataTest
  ("UserPassword").type("12345TEST")
  cy.getDataTest
  ('logInButton').click()
  document.body.setAttribute
  ('data-login-status', 'fail');
});



it('Log In Test correct Credentials', () => {

//Insert Right Credentials and takes User To Main page

cy.getDataTest("UserTest").type('user-test@email.com')
cy.getDataTest("UserPassword").type("12345TEST")
cy.getDataTest('logInButton').click()
document.body.setAttribute('data-login-status', 'success');
cy.url().should('equal', 'http://127.0.0.1:5500/Weather%20App/index.html');


});


});







