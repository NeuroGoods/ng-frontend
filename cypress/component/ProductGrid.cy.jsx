import React from 'react';
import { mount } from 'cypress/react';
import ProductGrid from '../../../src/components/product/ProductGrid/ProductGrid';

describe('ProductGrid Component Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as('getProducts');
  });

  it('should fetch and display products', () => {
    mount(<ProductGrid limit={4} activeCategory={null} />);
    cy.wait('@getProducts');
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
  });

  it('should filter products by category', () => {
    mount(<ProductGrid limit={4} activeCategory={2} />);
    cy.wait('@getProducts');
    cy.get('[data-testid="product-card"]').each(($el) => {
      cy.wrap($el).should('have.attr', 'data-category', '2');
    });
  });

  it('should display a message when no products match the category', () => {
    mount(<ProductGrid limit={4} activeCategory={999} />);
    cy.wait('@getProducts');
    cy.contains('No hay productos en esta categoría.').should('be.visible');
  });
});