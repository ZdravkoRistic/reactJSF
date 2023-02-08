import React from 'react';

// koristimo module za css zato koristimo "classes from"

import classes from './Card.moduli.css';

const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;