// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TrustBlock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TrustBlock/i);
    expect(titleElement).toBeInTheDocument();
});
