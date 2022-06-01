import React from 'react';
import { useParticipantList } from '../state/hooks/useParticipantList';

const NameDraw = () => {
  const participants: string[] = useParticipantList();
  return (
    <section>
      <form>
        <select name="chosenParticipant" id="chosenParticipant">
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default NameDraw;
