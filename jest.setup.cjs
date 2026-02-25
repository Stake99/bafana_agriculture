require('@testing-library/jest-dom')

// Mock scrollIntoView for tests
Element.prototype.scrollIntoView = jest.fn()
