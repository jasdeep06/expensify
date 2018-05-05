const defaultExpensesReducerState=[]

// reducer 1
export default  (state=defaultExpensesReducerState,action) => {
    switch(action.type){
        case("ADD_EXPENSE"):
            return [...state,action.expense]
        case('REMOVE_EXPENSE'):
            return state.filter((expense)=>{
                return expense.id !== action.id
            })
        case('EDIT_EXPENSE'):
            return state.map((expense)=>{

                if(action.editId == expense.id)
                {
                    
                    return {...expense, ...action.editedExpense}

                }else{
                    return expense
                }
            })
            

            
        default:
        return state
    }
}