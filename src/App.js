import React, { useState } from 'react';
import DodajKorisnika from './komponente/Users/AddUser';

import ListaKorisnika from './komponente/Users/UserList';



function App() {

  // useState ima uvek dva parametra prvi je gde idu podaci a drugi je funkcija koju koristimo da ubacimo,promenimo podatke prvog parametra

  const [listaZaKorisnika, podesiListuKorisnika] = useState([]);


  // funkcija za dodavanje novih korisnika 

  const dodajKorisnikaHandler = (korisnickoIme, godisteKorisnika) => {

    podesiListuKorisnika((predthodnaListaKorisnika) => {

      return [...predthodnaListaKorisnika,
      { ime: korisnickoIme, godine: godisteKorisnika, id: Math.random().toString() },];

    });

  };

  return (

    <div>

      <DodajKorisnika onDodajKorisnika={dodajKorisnikaHandler} />
      <ListaKorisnika korisnici={listaZaKorisnika} />

    </div>

  );
}

export default App;
