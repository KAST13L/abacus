type ActionsType =
    ReturnType<typeof changeMinMaxNumbers> |
    ReturnType<typeof resetValueAC> |
    ReturnType<typeof incrementAC> |
    ReturnType<typeof onChangeMaxValueHandlerAC> |
    ReturnType<typeof setCountValueAC> |
    ReturnType<typeof setStartValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof onChangeMinValueHandlerAC>
export type CounterStateType = {
    startValue: number
    maxValue: number
    countValue: number
    isChange: boolean
}
const initialState = {
    startValue: 0,
    maxValue: 5,
    countValue: 0,
    isChange: false
}

export const counterReducer = (state = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "CHANGE_MIN_MAX":
            return {...state, isChange: false, startValue: action.startV, maxValue: action.maxV, countValue: action.startV}
        case "RESET_VALUE":
            return {...state, countValue: state.startValue}
        case "INCREMENT":
            return {...state, countValue: state.countValue + 1}
        case 'MAX_VALUE_HANDLER':
            return {...state, isChange: true, maxValue: action.e}
        case 'MIN_VALUE_HANDLER':
            return {...state, isChange: true, startValue: action.e}
        case 'SET_COUNT_VALUE':
            return {...state, countValue: action.countValue}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue}
        default:
            return state
    }
}

export const changeMinMaxNumbers = (startV: number, maxV: number) => ({type: 'CHANGE_MIN_MAX' as const, startV, maxV })
export const resetValueAC = () => ({type:"RESET_VALUE" as const})
export const incrementAC = () => ({type:"INCREMENT" as const})
export const onChangeMaxValueHandlerAC = (e:number) => ({type:'MAX_VALUE_HANDLER' as const, e})
export const onChangeMinValueHandlerAC = (e:number) => ({type:'MIN_VALUE_HANDLER' as const, e})
export const setCountValueAC = (countValue: number) => ({type:'SET_COUNT_VALUE' as const, countValue})
export const setMaxValueAC = (maxValue: number) => ({type:'SET_MAX_VALUE' as const, maxValue})
export const setStartValueAC = (startValue: number) => ({type:'SET_START_VALUE' as const, startValue})
