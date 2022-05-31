import { fireEvent, render, screen } from '@testing-library/react';
import SecretSantaForm from './SecretSantaForm';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('SecretSantaForm', () => {
  test('can not allow empty name field to be added', () => {
    render(
      <RecoilRoot>
        <SecretSantaForm />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText('Add new name');
    const button = screen.getByRole('button');
    expect(nameInput).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('add new participant if name is not empty', () => {
    render(
      <RecoilRoot>
        <SecretSantaForm />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText('Add new name');
    const button = screen.getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'John' } });

    fireEvent.click(button);

    expect(nameInput).toHaveFocus();
    expect(nameInput).toHaveValue('');
  });

  test('Duplicate names are not allowed', () => {
    render(
      <RecoilRoot>
        <SecretSantaForm />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText('Add new name');
    const button = screen.getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.click(button);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');

    expect(errorMessage.textContent).toBe('Name already exists');
  });

  test('Error message must disapper after 5 secs', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <SecretSantaForm />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText('Add new name');
    const button = screen.getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.click(button);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');

    expect(errorMessage).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
