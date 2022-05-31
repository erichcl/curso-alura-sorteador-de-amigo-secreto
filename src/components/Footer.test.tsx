import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hooks/useParticipantList';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

jest.mock('../state/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('not enough participants', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  it('should not start the game', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('have enough participants', () => {
  const participants = ['John', 'Jane', 'Jake', 'Jill'];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  it('should allow the game to start', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
  });

  it('should call the navigation method', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/namesDraw');
  });
});
