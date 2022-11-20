import React, {useEffect} from 'react';
import {Counter} from "./components/Counter/Counter";
// @ts-ignore
import s from './App.module.css'
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/redux/store";
import {CounterStateType, setCountValueAC, setMaxValueAC, setStartValueAC} from "./components/redux/counter-reducer";
import {AnyAction} from "redux";
export  const setToLocalStorage = (value: string, state: any) => {
    localStorage.setItem(value, JSON.stringify(state[value as keyof typeof state]))
}

function App() {

    const state = useSelector<AppRootStateType, CounterStateType>(state => state.state)
    const dispatch = useDispatch()

    const getFromLocalStorage = (value: string, setter: (value: number) => AnyAction) => {
        let valueAsString = localStorage.getItem(value)
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(setter(newValue))
        }
    }
    useEffect(() => {
        getFromLocalStorage('countValue', setCountValueAC)
        getFromLocalStorage('maxValue', setMaxValueAC)
        getFromLocalStorage('startValue', setStartValueAC)
    }, [])
    useEffect(() => {
        setToLocalStorage('countValue', state)
    }, [state.countValue])

    return (
        <div className={s.main}>
            <div className={s.app}>
                <SettingsCounter/>
            </div>
            <div className={s.app}>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
