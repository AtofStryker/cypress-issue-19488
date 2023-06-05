describe('template spec', () => {
  it('passes', () => {
    // make the test run at least 30 seconds and use scrolls to see if anything freezes in the video
    cy.visit('https://example.cypress.io')

    cy.wait(5000)

    cy.get('a[href="/commands/querying"]').contains('get').should('exist').scrollIntoView()

    cy.wait(5000)

    cy.get('a[ href="/commands/traversal"]').contains('children').should('exist').scrollIntoView()

    cy.wait(5000)

    cy.get('a[href="/commands/spies-stubs-clocks"]').contains('spy').should('exist').scrollIntoView()

    cy.wait(5000)

    cy.get('a[href="/commands/querying"]').contains('get').should('exist').scrollIntoView()

    cy.wait(5000)

    cy.get('a[ href="/commands/traversal"]').contains('children').should('exist').scrollIntoView()

    cy.wait(5000)

    cy.get('a[href="/commands/spies-stubs-clocks"]').contains('spy').should('exist').scrollIntoView()
  })
})