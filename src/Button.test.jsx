// Button.test.jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the Button component with correct label', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
