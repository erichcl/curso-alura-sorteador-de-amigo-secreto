import React from 'react';
import Footer from '../components/Footer';
import ParticipantList from '../components/ParticipantList';
import SecretSantaForm from '../components/SecretSantaForm';

const Config = () => {
  return (
    <div>
      <SecretSantaForm />
      <ParticipantList />
      <Footer />
    </div>
  );
};

export default Config;
