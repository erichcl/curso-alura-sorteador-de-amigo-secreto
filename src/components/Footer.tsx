import React from 'react';
import { useParticipantList } from '../state/hooks/useParticipantList';

const Footer = () => {
  const participants: string[] = useParticipantList();
  return (
    <footer>
      <button disabled={participants.length < 3}>Start Game</button>
    </footer>
  );
};

export default Footer;
