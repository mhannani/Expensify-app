//? EXPENSES REDUCER :
//? ==================
const expensesInitialState = [];
export default (state = expensesInitialState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...state,
                        ...action.updates
                    }
                }
                return state;
            });
        default:
            return state;
    }
}

