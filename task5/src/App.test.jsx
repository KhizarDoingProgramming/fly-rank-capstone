import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Portfolio Settings Form (Round Two)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders initial profile fields correctly', () => {
    render(<App />);
    expect(screen.getByText('Configure Portfolio')).toBeDefined();
    expect(screen.getByLabelText(/Full Name/).value).toBe('Ghulam Mustafa Khizar');
    expect(screen.getByLabelText(/Professional Title/).value).toBe('Frontend AI Engineer');
  });

  it('allows navigation between tabs', () => {
    render(<App />);
    
    // Switch to Social Links tab
    fireEvent.click(screen.getByText('Social Links'));
    expect(screen.getByLabelText(/GitHub Profile URL/)).toBeDefined();
    expect(screen.getByLabelText(/LinkedIn Profile URL/)).toBeDefined();
    
    // Switch to Calendly tab
    fireEvent.click(screen.getByText('Calendly Sync'));
    expect(screen.getByLabelText(/Calendly Link/)).toBeDefined();
  });

  it('displays validation error if required fields are cleared', () => {
    render(<App />);
    
    const nameInput = screen.getByLabelText(/Full Name/);
    
    // Clear name
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.blur(nameInput);
    
    expect(screen.getByText('Name is required')).toBeDefined();
  });

  it('validates GitHub and LinkedIn URLs on blur', () => {
    render(<App />);
    
    // Switch to Social tab
    fireEvent.click(screen.getByText('Social Links'));
    
    const githubInput = screen.getByLabelText(/GitHub Profile URL/);
    
    // Set invalid github URL
    fireEvent.change(githubInput, { target: { value: 'invalid-url' } });
    fireEvent.blur(githubInput);
    
    expect(screen.getByText(/Must be a valid GitHub profile URL/)).toBeDefined();
  });

  it('validates Calendly URL format', () => {
    render(<App />);
    
    // Switch to Calendly tab
    fireEvent.click(screen.getByText('Calendly Sync'));
    
    const calendlyInput = screen.getByLabelText(/Calendly Link/);
    
    // Set invalid Calendly URL
    fireEvent.change(calendlyInput, { target: { value: 'https://google.com/wrong-path' } });
    fireEvent.blur(calendlyInput);
    
    expect(screen.getByText(/Must be a valid Calendly scheduler URL/)).toBeDefined();
  });

  it('restores default settings on reset button click', () => {
    render(<App />);
    
    const nameInput = screen.getByLabelText(/Full Name/);
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    expect(nameInput.value).toBe('New Name');
    
    const resetButton = screen.getByLabelText('Reset fields to original values');
    fireEvent.click(resetButton);
    
    expect(screen.getByLabelText(/Full Name/).value).toBe('Ghulam Mustafa Khizar');
  });

  it('displays loading indicator and success toast on valid submission', () => {
    render(<App />);
    
    const submitBtn = screen.getByLabelText('Save all changes');
    
    // Wrap click and assertion in act where state update happens
    act(() => {
      fireEvent.click(submitBtn);
    });
    
    // Should show "Saving..." loading state
    expect(screen.getByText('Saving...')).toBeDefined();
    
    // Fast-forward timers to complete mock network request
    act(() => {
      vi.advanceTimersByTime(1300);
    });
    
    // Toast should show up synchronously now
    expect(screen.getByText('Portfolio settings updated successfully!')).toBeDefined();
  });
});
