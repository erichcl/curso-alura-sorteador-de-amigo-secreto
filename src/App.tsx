import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SecretSantaForm from './components/SecretSantaForm';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={SecretSantaForm} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
