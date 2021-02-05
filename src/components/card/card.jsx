import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.img_wrapper}>
                <img 
                    src={props.img}
                    alt="dress"/>
                <span>{props.price}</span>
            </div>
            <div className={classes.name_wrapper}>
                <div>{props.name}</div>
                <div>stars</div>
            </div>
        </div>
    )
}
export default Card;