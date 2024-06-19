import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CaptchaComponent from './lib/Captcha';
import useCaptcha from './lib/useCaptcha';

// Mock the useCaptcha hook
jest.mock('./lib/useCaptcha.js');

describe('CaptchaComponent', () => {
  const mockGenerateCaptcha = jest.fn();
  const captchaValue = 'abc123';

  beforeEach(() => {
    useCaptcha.mockReturnValue({
      captcha: captchaValue,
      generateCaptcha: mockGenerateCaptcha
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders captcha and handles user input correctly', () => {
    const handleValidate = jest.fn();
    render(<CaptchaComponent onValidate={handleValidate} />);

    // Check that the captcha is displayed
    const captchaInput = screen.getByDisplayValue(captchaValue);
    expect(captchaInput).toBeInTheDocument();

    // User input matches captcha
    const userInput = screen.getByPlaceholderText('Enter Captcha');
    fireEvent.change(userInput, { target: { value: captchaValue } });
    expect(handleValidate).toHaveBeenCalledWith(true);
    expect(userInput).toHaveClass('border-green-500');

    // User input does not match captcha
    fireEvent.change(userInput, { target: { value: 'wrongCaptcha' } });
    expect(handleValidate).toHaveBeenCalledWith(false);
    expect(userInput).toHaveClass('border-red-500');
  });

  test('calls generateCaptcha on mount', () => {
    const handleValidate = jest.fn();
    render(<CaptchaComponent onValidate={handleValidate} />);
    expect(mockGenerateCaptcha).toHaveBeenCalled();
  });

  test('calls generateCaptcha on reset click', () => {
    const handleValidate = jest.fn();
    render(<CaptchaComponent onValidate={handleValidate} />);

    const resetButton = screen.getByText('Reset Recaptcha');
    fireEvent.click(resetButton);
    expect(mockGenerateCaptcha).toHaveBeenCalledTimes(2); // Once on mount and once on click
  });
});
