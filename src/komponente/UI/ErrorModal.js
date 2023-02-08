import React from "react";

import Card from './Card';

import Button from './Button';

import classes from './ErrorModal.module.css';


const ErrorModal = props => {

    // backdrop je bilo koje prazno mesto na ekranu i zato je stavljen onClick na taj div zato sto ima tu css klasu
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onHandleError} />

            <Card className={classes.modal}>

                <header className={classes.header}>
                    <h2>{props.naslov}</h2>
                </header>

                <div className={classes.content}>
                    <p>{props.poruka}</p>
                </div>

                <footer className={classes.actions}>
                    <Button onClick={props.onHandleError}>U redu</Button>
                </footer>

            </Card>
        </div>
    );

};




export default ErrorModal;