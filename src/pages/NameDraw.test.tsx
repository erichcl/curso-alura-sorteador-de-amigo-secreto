import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hooks/useParticipantList';
import { useSecretSantaResult } from '../state/hooks/useSecretSantaResult';
import NameDraw from './NameDraw';

jest.mock('../state/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock('../state/hooks/useSecretSantaResult', () => {
  return {
    useSecretSantaResult: jest.fn(),
  };
});

describe('Name draw page', () => {
  const participants = ['John', 'Jane', 'Jake', 'Jill'];

  const result = new Map([
    ['John', 'Jane'],
    ['Jane', 'Jake'],
    ['Jake', 'Jill'],
    ['Jill', 'John'],
  ]);
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useSecretSantaResult as jest.Mock).mockReturnValue(result);
  });
  it('participants can get their secret santa friend', () => {
    render(
      <RecoilRoot>
        <NameDraw />
      </RecoilRoot>
    );
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length);
  });

  it('the friends name is displayed', () => {
    render(
      <RecoilRoot>
        <NameDraw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Choose your name');
    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretSantaFriend = screen.getByRole('alert');
    expect(secretSantaFriend).toBeInTheDocument();
  });
});
