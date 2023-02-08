import React from 'react';

import Card from "../UI/Card";

import classes from "./Users.module.css";



const ListaKorisnika = props => {




    return (

        <Card className={classes.users} >
            <ul>
                {props.korisnici.map((korisnik) => (
                    <li key={korisnik.id}>
                        {korisnik.ime} ({korisnik.godine} Godine ima.)
                    </li>
                ))}
            </ul>

        </Card >



    );

};



export default ListaKorisnika;