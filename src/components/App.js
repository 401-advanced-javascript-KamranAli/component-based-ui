import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

export default function App() {
  return (
    <>
      <Header />
      <Footer />
      <Character
        img="https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728"
        name="Rick Sanchez"
        species="Human" />
    </>
  );
}
