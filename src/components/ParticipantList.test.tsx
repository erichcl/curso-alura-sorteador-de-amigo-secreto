import { render, screen } from '@testing-library/react';
import react from 'react';
import ParticipantList from './ParticipantList';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hooks/useParticipantList';

jest.mock('../state/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('Empty participant list', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test('Participant list is empty', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('Not empty participant list', () => {
  const participants = ['John', 'Jane'];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  test('Participant list is not empty', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
