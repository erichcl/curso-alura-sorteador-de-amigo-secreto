import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNameDrawal } from '../state/hooks/useNameDrawal';
import { useParticipantList } from '../state/hooks/useParticipantList';

const Footer = () => {
  const participants: string[] = useParticipantList();
  const navigate = useNavigate();

  const namesDraw = useNameDrawal();

  const startGame = () => {
    namesDraw();
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
