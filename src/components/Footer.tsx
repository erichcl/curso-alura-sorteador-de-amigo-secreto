import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParticipantList } from '../state/hooks/useParticipantList';

const Footer = () => {
  const participants: string[] = useParticipantList();
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/namesDraw');
  };
  return (
    <footer>
      <button disabled={participants.length < 3} onClick={startGame}>
        Start Game
      </button>
    </footer>
  );
};

export default Footer;
