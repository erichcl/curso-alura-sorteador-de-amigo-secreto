import React, { useState } from 'react';
import { useParticipantList } from '../state/hooks/useParticipantList';
import { useSecretSantaResult } from '../state/hooks/useSecretSantaResult';

const NameDraw = () => {
  const participants: string[] = useParticipantList();
  const result = useSecretSantaResult();
  const [currentParticipant, setCurrentParticipant] = useState('');
  const [secretSanta, setSecretSanta] = useState('');
  const drawNames = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentParticipantsSecretSanta = result.get(currentParticipant);
    if (currentParticipantsSecretSanta) {
      setSecretSanta(currentParticipantsSecretSanta);
    }
  };

  return (
    <section>
      <form onSubmit={drawNames}>
        <select
          required
          name="chosenParticipant"
          id="chosenParticipant"
          placeholder="Choose your name"
          value={currentParticipant}
          onChange={(e) => setCurrentParticipant(e.target.value)}
        >
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>
        <button>Draw</button>
      </form>
      {secretSanta && <p role="alert">{secretSanta}</p>}
    </section>
  );
};

export default NameDraw;
