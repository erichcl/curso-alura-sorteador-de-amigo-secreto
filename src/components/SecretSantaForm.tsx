import React, { useRef, useState } from 'react';
import { useAddParticipant } from '../state/hooks/useAddParticipant';
import { useErrorMessage } from '../state/hooks/useErrorMessage';

const SecretSantaForm = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const errorMessage = useErrorMessage();
  const addToList = useAddParticipant();
  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToList(name);
    setName('');
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new name"
      />
      <button disabled={!name}>Submit</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default SecretSantaForm;
