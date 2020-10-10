
//! SET_TEXT_FILTER
export const setTextFilter = (text)=>({
    text,
    type:'SET_TEXT_FILTER',
});

//! SORT_BY_AMOUNT

export const sortByAmount = ()=>({
/**
 * sort the expenses list by amount(ascending order)
 */

type: 'SORT_BY_AMOUNT'
})

//! SORT_BY_DATE

export const sortByDate = ()=>({
    type: 'SORT_BY_DATE'
})

//! SET_START_DATE

export const setStartDate = (value)=>({
    type: 'SET_START_DATE',
    value
})

//! SET_END_DATE

export const setEndDate = (value)=>({
    type: 'SET_END_DATE',
    value
})
