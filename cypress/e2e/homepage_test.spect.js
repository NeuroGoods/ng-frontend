describe('Home Page Tests', () => {
    beforeEach(() => {
      cy.visit('/') 
    });
  
    it('should render search input with icon', () => {
      cy.get('input[type="search"]').should('be.visible');
      cy.get('svg').should('have.class', 'fa-search');
    });
  
    it('should display product carousel', () => {
      cy.get('[data-testid="product-carousel"]').should('exist');
    });
  
    it('should display category navigation', () => {
      cy.get('[data-testid="category-nav"]').should('exist');
    });
  
    it('should display product grid with 4 items', () => {
      cy.get('[data-testid="product-grid"] .product-item').should('have.length', 4);
    });
  
    it('should navigate to products page when clicking "Ver todos"', () => {
      cy.contains('Ver todos').click();
      cy.url().should('include', '/products');
    });
  });