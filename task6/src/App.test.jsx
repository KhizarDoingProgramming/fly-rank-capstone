import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Interactive Portfolio Application (Task 6)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders initial strategy sections and claim statement', () => {
    render(<App />);
    expect(screen.getByText('Sitemap Proof Statement')).toBeDefined();
    expect(screen.getAllByText(/I build/)[0]).toBeDefined();
  });

  it('toggles sitemap modal correctly', () => {
    render(<App />);
    
    // Sitemap modal should not be in document initially
    expect(screen.queryByLabelText('Sitemap Schema Modal')).toBeNull();
    
    // Click view sitemap
    fireEvent.click(screen.getByText('View Sitemap'));
    expect(screen.getByLabelText('Sitemap Schema Modal')).toBeDefined();
    expect(screen.getByText('Portfolio Sitemap Path')).toBeDefined();
    
    // Click close button
    fireEvent.click(screen.getByLabelText('Close sitemap modal'));
    expect(screen.queryByLabelText('Sitemap Schema Modal')).toBeNull();
  });

  it('opens and closes case study deep dive modals', () => {
    render(<App />);
    
    // Query "Read Deep Dive" buttons
    const deepDiveButtons = screen.getAllByText('Read Deep Dive');
    expect(deepDiveButtons.length).toBe(3); // 3 projects
    
    // Click the first one (fly-rank-portal)
    fireEvent.click(deepDiveButtons[0]);
    
    expect(screen.getByLabelText('Detail Modal for fly-rank-portal')).toBeDefined();
    expect(screen.getByText('Lighthouse Performance')).toBeDefined();
    expect(screen.getByText('Preventing unnecessary component re-renders while updating live shift logs.')).toBeDefined();
    
    // Close deep dive modal
    fireEvent.click(screen.getByLabelText('Close project modal'));
    expect(screen.queryByLabelText('Detail Modal for fly-rank-portal')).toBeNull();
  });

  it('steps through the calendar booking widget successfully', () => {
    render(<App />);
    
    // Step 1: Initial calendar view
    expect(screen.getByTestId('scheduler-step-date')).toBeDefined();
    
    // Next button should be disabled initially
    const nextBtn = screen.getByText('Next: Add Details').closest('button');
    expect(nextBtn.disabled).toBe(true);
    
    // Click on the first day selector (Thursday, July 23)
    fireEvent.click(screen.getByText('Thursday'));
    
    // Click on a time slot (10:00 AM)
    fireEvent.click(screen.getByText('10:00 AM'));
    
    // Now next button should be enabled
    expect(nextBtn.disabled).toBe(false);
    
    // Click next
    fireEvent.click(nextBtn);
    
    // Step 2: Add Details form view
    expect(screen.getByTestId('scheduler-step-details')).toBeDefined();
    
    // Validate empty form submit
    fireEvent.click(screen.getByText('Confirm Booking'));
    expect(screen.getByText('Name is required')).toBeDefined();
    expect(screen.getByText('Email is required')).toBeDefined();
    
    // Fill details
    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Your Email');
    
    fireEvent.change(nameInput, { target: { value: 'Jane Reviewer' } });
    fireEvent.change(emailInput, { target: { value: 'jane@agency.com' } });
    
    // Submit booking
    act(() => {
      fireEvent.click(screen.getByText('Confirm Booking'));
    });
    
    // Check loading indicator
    expect(screen.getByText('Reserving...')).toBeDefined();
    
    // Fast-forward timers for mock booking delay
    act(() => {
      vi.advanceTimersByTime(1300);
    });
    
    // Step 3: Success state view
    expect(screen.getByTestId('scheduler-step-success')).toBeDefined();
    expect(screen.getByText('Reservation Confirmed!')).toBeDefined();
    expect(screen.getByText('jane@agency.com')).toBeDefined();
    expect(screen.getByText('Thursday, July 23')).toBeDefined();
  });

  it('validates inquiry form inputs on submit', () => {
    render(<App />);
    
    const sendBtn = screen.getByText('Send Message').closest('button');
    
    fireEvent.click(sendBtn);
    
    expect(screen.getByText('Name is required')).toBeDefined();
    expect(screen.getByText('Email is required')).toBeDefined();
    expect(screen.getByText('Message is required')).toBeDefined();
  });
});
