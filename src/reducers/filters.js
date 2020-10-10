import moment from "moment";
//? FILTER REDUCER
//? ==============

const filterInitialState = {
    text: '',
    sortBy: 'date',
    createdAt: undefined,
    startDate: moment().startOf('month'),
    endDate: moment().endOf("month")
};
//export default FilterReducer = (state = filterInitialState, action)=>{
export default (state = filterInitialState, action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SET_END_DATE':

            return action.value !== undefined ?{
                    ...state,
                    endDate: action.value
                } :
                {
                    state,
                    startDate: undefined
                }
        case 'SET_START_DATE':
            return action.value !== undefined ? {
                    ...state,
                    startDate: action.value
                }:
                {
                    ...state,
                    startDate: undefined
                }
        default :
            return state;
    }
}