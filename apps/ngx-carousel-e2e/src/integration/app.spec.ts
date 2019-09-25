import { getGreeting } from '../support/app.po';

describe('ngx-carousel', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-carousel!');
  });
});
