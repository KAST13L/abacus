import React from 'react';
import s from './Counter.module.css'
import {Button} from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {CounterStateType, incrementAC, resetValueAC} from "../redux/counter-reducer";

export const Counter = () => {

    const state = useSelector<AppRootStateType, CounterStateType>( state => state.state)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={s.count}>
                {state.startValue < state.maxValue && state.startValue >= 0
                    ? <div>
                        {state.isChange
                            ?
                            <div style={{fontSize: '35px', paddingTop: '50px'}}>enter values and press 'set'</div>
                            : state.startValue < 0 || state.maxValue < state.startValue
                                ?  <div style={{color:'red'}}>error</div>
                                : <div className={state.countValue === state.maxValue ? s.error : ''}>
                                    {state.isChange ? "enter values and press 'set'" : state.countValue}
                                </div>

                        }
                    </div>
                    : <span style={{color:'red'}}>error</span>
                }
            </div>
            <div className={s.functional}>
                <Button title={'inc'} callBack={()=>{dispatch(incrementAC())}}
                        disabled={state.countValue === state.maxValue || state.isChange}/>
                <Button title={'reset'} callBack={()=>{dispatch(resetValueAC())}}
                        disabled={state.countValue === state.startValue || state.isChange}/>
            </div>
        </div>
    );
};

