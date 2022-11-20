import React, {ChangeEvent} from 'react';
import s from './SettingsCounter.module.css'
import {Button} from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {
    changeMinMaxNumbers,
    CounterStateType,
    onChangeMaxValueHandlerAC,
    onChangeMinValueHandlerAC,
} from "../redux/counter-reducer";
import {setToLocalStorage} from "../../App";


export const SettingsCounter = () => {

    const state = useSelector<AppRootStateType, CounterStateType>( state => state.state)
    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxValueHandlerAC(+e.currentTarget.value))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMinValueHandlerAC(+e.currentTarget.value))
    }
    const onSubmitSettings = () => {
        dispatch(changeMinMaxNumbers(state.startValue, state.maxValue))
        setToLocalStorage('maxValue', state)
        setToLocalStorage('startValue', state)
    }


    return (
        <div className={s.settingsPage}>
            <div className={s.numbers}>
                <span>Max value: </span>
                <input
                    type="number"
                    value={state.maxValue}
                    onChange={onChangeMaxValueHandler}
                    className={state.maxValue <= state.startValue ? s.error : ''}
                /><br/>
                <span>Start value: </span>
                <input
                    type="number"
                    value={state.startValue}
                    onChange={onChangeMinValueHandler}
                    className={state.startValue < 0 || state.startValue >= state.maxValue ? s.error : ''}
                />
            </div>
            <div className={s.functional}>
                <Button title={'Set'}
                         callBack={onSubmitSettings}
                         disabled={state.startValue < 0 || state.maxValue <= state.startValue}
            />
            </div>
        </div>
    );
};

