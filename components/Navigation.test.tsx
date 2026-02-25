import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import { NAV_ITEMS } from '@/lib/constants';

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

global.IntersectionObserver = MockIntersectionObserver as any;

describe('Navigation - Smooth Scrolling', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    
    // Mock document.getElementById to return mock elements
    const mockElements: { [key: string]: HTMLElement } = {};
    NAV_ITEMS.forEach((item) => {
      mockElements[item.id] = document.createElement('section');
      mockElements[item.id].id = item.id;
    });
    
    jest.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      return mockElements[id] || null;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Navigation component renders all navigation items', () => {
    render(<Navigation />);
    
    NAV_ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('Clicking navigation link calls scrollIntoView with smooth behavior', () => {
    render(<Navigation />);
    
    const homeLink = screen.getAllByText('Home')[0];
    const mockElement = document.getElementById('hero');
    
    fireEvent.click(homeLink);
    
    expect(mockElement?.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('All navigation links trigger smooth scroll when clicked', () => {
    render(<Navigation />);
    
    NAV_ITEMS.forEach((item) => {
      const link = screen.getAllByText(item.label)[0];
      const mockElement = document.getElementById(item.id);
      
      fireEvent.click(link);
      
      expect(mockElement?.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  test('Keyboard navigation (Enter key) triggers smooth scroll', () => {
    render(<Navigation />);
    
    const homeLink = screen.getAllByText('Home')[0];
    const mockElement = document.getElementById('hero');
    
    fireEvent.keyDown(homeLink, { key: 'Enter' });
    
    expect(mockElement?.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('Keyboard navigation (Space key) triggers smooth scroll', () => {
    render(<Navigation />);
    
    const homeLink = screen.getAllByText('Home')[0];
    const mockElement = document.getElementById('hero');
    
    fireEvent.keyDown(homeLink, { key: ' ' });
    
    expect(mockElement?.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('Navigation links have proper ARIA attributes', () => {
    render(<Navigation />);
    
    const homeLink = screen.getAllByText('Home')[0];
    
    expect(homeLink).toHaveAttribute('aria-label', 'Navigate to Home section');
  });

  test('Mobile menu closes after clicking navigation link', () => {
    render(<Navigation />);
    
    // Open mobile menu
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);
    
    // Click a navigation link
    const links = screen.getAllByText('Home');
    const mobileLink = links[links.length - 1]; // Get the mobile menu link
    fireEvent.click(mobileLink);
    
    // Menu should close (button aria-expanded should be false)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
