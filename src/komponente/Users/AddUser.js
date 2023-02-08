
import React, { useState } from 'react';

import Card from "../UI/Card";

import classes from './AddUser.module.css';

import Button from '../UI/Button';

import ErrorModal from '../UI/ErrorModal';


// ovaj ovde props se odnosi na ovaj dole props gde prosledjuje vrednosti dobijene iz App.js

const DodajKorisnika = (props) => {

    const [korisnicko_Ime, podesi_Korisnicko_Novo_Ime] = useState('');
    const [godiste_Korisnika, podesi_Godiste_Korisnika] = useState('');
    const [error, setError] = useState();

    const dodajKorisnika = (event) => {
        event.preventDefault();

        if (korisnicko_Ime.trim().length === 0 || godiste_Korisnika.trim().length === 0) {
            setError({
                naslov: 'Pogresno uneseni podaci',
                poruka: 'Unesite ispravne podatke'
            });
            return;
        }

        if (godiste_Korisnika < 1) {
            setError({
                naslov: 'Pogresno unesene godine',
                poruka: 'Unesite ispravne podatke koliko imate godina (>0).'
            });
            return;
        }

        // ovaj ovde objekat props je dodeljen iz App.js napravljene vrednosti onDodajKorsinkika u koju ide funkcija za dodavanje novih korisnika

        // i koristi se kao funkcija 

        props.onDodajKorisnika(korisnicko_Ime, godiste_Korisnika);

        podesi_Korisnicko_Novo_Ime('');
        podesi_Godiste_Korisnika('');
    };

    const korisnicko_Ime_Funkcija = (event) => {
        podesi_Korisnicko_Novo_Ime(event.target.value);
    };

    const godiste_Korisnika_Funkcija = (event) => {
        podesi_Godiste_Korisnika(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (

        <div>

            {error && <ErrorModal naslov={error.naslov} poruka={error.poruka} onHandleError={errorHandler} />}


            <Card className={classes.input}>

                <form onSubmit={dodajKorisnika}>

                    <label htmlFor='korisnicko_ime'>Korisnicko ime</label>
                    <input id='korisnicko_ime' type="text"
                        value={korisnicko_Ime}
                        onChange={korisnicko_Ime_Funkcija} />

                    <label htmlFor='godiste'>Godiste</label>
                    <input id='godiste' type="number"
                        value={godiste_Korisnika}
                        onChange={godiste_Korisnika_Funkcija} />



                    <Button type='submit'>Dodaj korisnika</Button>
                </form>

            </Card>

        </div>

    );


};




export default DodajKorisnika;