import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hooks/useParticipantList';
import NameDraw from './NameDraw';

jest.mock('../state/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('Name draw page', () => {
  const participants = ['John', 'Jane', 'Jake', 'Jill'];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
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
});
