import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callBack} className={s.btn} disabled={props.disabled}>
            {props.title}
        </button>
    );
};

