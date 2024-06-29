import { render, screen } from '@testing-library/react';
import { Application } from '../../../src/components';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    const pageHeading = screen.getByRole('heading', {
      name: 'Job Application Form',
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      name: 'Section 1',
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText(/All fields are required/i);
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText((content) =>
      content.startsWith('All'),
    );
    expect(paragraphElement2).toBeInTheDocument();

    const closeButton = screen.getByTitle('close');
    expect(closeButton).toBeInTheDocument();

    const imageElement = screen.getByAltText('A person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const formElement = screen.getByTestId('application-form');
    expect(formElement).toBeInTheDocument();

    const textInput = screen.getByRole('textbox', { name: /name/i });
    expect(textInput).toBeInTheDocument();

    const textInput2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(textInput2).toBeInTheDocument();

    const textInput3 = screen.getByPlaceholderText('Full Name');
    expect(textInput3).toBeInTheDocument();

    const textInput4 = screen.getByDisplayValue('Jesús Peña');
    expect(textInput4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      /I Agree to the terms and Conditions/i,
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });
});
