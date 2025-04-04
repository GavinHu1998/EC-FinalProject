import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Group6 heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Group6/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders YizhuoHu subheading', () => {
  render(<App />);
  const yizhuoElement = screen.getByText(/YizhuoHu/i);
  expect(yizhuoElement).toBeInTheDocument();
});

test('renders DanLu subheading', () => {
  render(<App />);
  const danluElement = screen.getByText(/DanLu/i);
  expect(danluElement).toBeInTheDocument();
});

// Combined test to ensure all required elements are present
test('renders all required elements', () => {
  render(<App />);
  
  // Check that the main heading exists and is an h1
  const groupHeading = screen.getByRole('heading', { name: /Group6/i, level: 1 });
  expect(groupHeading).toBeInTheDocument();
  
  // Check that YizhuoHu exists and is an h2
  const yizhuoHeading = screen.getByRole('heading', { name: /YizhuoHu/i, level: 2 });
  expect(yizhuoHeading).toBeInTheDocument();
  
  // Check that DanLu exists and is an h2
  const danluHeading = screen.getByRole('heading', { name: /DanLu/i, level: 2 });
  expect(danluHeading).toBeInTheDocument();
});