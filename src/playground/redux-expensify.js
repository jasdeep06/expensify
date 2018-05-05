import {createStore,combineReducers} from "redux"
import uuid from "uuid"

const demoState = {
   expenses:[{
       id:'abcdefghijkl',
       description:"January Rent",
       note:'This was the final payment for that address',
       amount:54500,
       createdAt:0
   }],
   filters:{
       text:"rent",
       sortBy:'amount',
       startDate:undefined,
       endDate:undefined
   }
};






const defaultExpensesReducerState=[]

// reducer 1
const expensesReducer = (state=defaultExpensesReducerState,action) => {
    switch(action.type){
        case("ADD_EXPENSE"):
            return {expense:[...state,action.expense]}
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

//reducer 2
const defaultFiltersReducerState={text:"",sortBy:"date",startDate:undefined,endDate:undefined}

const filtersReducer = (state=defaultFiltersReducerState,action) => {
    switch(action.type){
        case("EDIT_TEXT"):
        
            return {...state , text:action.newText}
        case("SORT_BY_DATE"):
        
            return {...state , sortBy:"date"}
        case("SORT_BY_AMOUNT"):
        
            return {...state , sortBy:"amount"}
        case("SET_START_DATE"):
            return {...state,startDate:action.startDate}
        
        case("SET_END_DATE"):
            return {...state,endDate:action.endDate}

        default:
        return state;
    }
} 

//store
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
)



//ADD_EXPENSE
const addExpense = ({description="",note="",amount=0,createdAt=0}={}) =>{
    return {
        type:"ADD_EXPENSE",
        expense:{
            id:uuid(),
            description:description,
            note:note,
            amount:amount,
            createdAt:createdAt

        }

    }
}


//action function generators
const removeExpense =(removeId)=> {
    return {
        type:"REMOVE_EXPENSE",
        id:removeId

    }

}


const editExpense = (editId,editedExpense) =>{
    return {
        type:"EDIT_EXPENSE",
        editId:editId,
        editedExpense:editedExpense

    }
}




const setTextFilter = (newText="") => {

    return {
        type:"EDIT_TEXT",
        newText:newText
    }
}


const sortByAmount = () =>{
    return {
        type:"SORT_BY_AMOUNT"
    }

}
const sortByDate = () =>{
    return {
        type:"SORT_BY_DATE"
    }

}
const setStartDate = (startDate) =>{
    return {
        type:"SET_START_DATE",
        startDate:startDate
    }

}
const setEndDate = (endDate) =>{
    return {
        type:"SET_END_DATE",
        endDate:endDate

    }

}



//selector
const getVisibleExpenses = (expenses,filters) =>{

    
    return expenses.filter((expense)=>{

        const matchedStartDate = typeof filters.startDate !== "number" || expense.createdAt >= filters.startDate
        const matchedEndDate = typeof filters.endDate !== "number" || expense.createdAt <= filters.endDate
        
        
        const matchedText = expense.description.toLowerCase().search(filters.text.toLowerCase()) !== -1 || expense.note.toLowerCase().search(filters.text.toLowerCase()) !== -1
       
        return matchedStartDate && matchedEndDate && matchedText

    }).sort((a,b)=>{
        if(filters.sortBy == "date"){
            console.log(a.createdAt)
            console.log(b.createdAt)
            return a.createdAt >= b.createdAt ?  -1 :  1
        }
        if(filters.sortBy == "amount"){
            return a.amount >= b.amount ? -1 : 1
        }
    })
    

    
}
store.dispatch(addExpense({description:"January Water Bill",amount:300}))
store.dispatch(addExpense({description:"January Gas Bill",amount:400}))

store.subscribe(()=>{
    const state=store.getState()
    //const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(store.getState()
)
})


// const expenseOne=store.dispatch(addExpense({description:"Noodles",amount:30}))
// const expenseTwo=store.dispatch(addExpense({description:"Coffee",amount:20}))

// store.dispatch(removeExpense(expenseOne.expense.id))

// store.dispatch(editExpense(expenseTwo.expense.id,{description:"Coffe coffee",note:"Oh yeah"}))

// store.dispatch(setTextFilter("IIT BHU"))
// store.dispatch(setTextFilter())

// store.dispatch(sortByDate())

// store.dispatch(sortByAmount())
// store.dispatch(setStartDate(125))

// store.dispatch(setStartDate())

// store.dispatch(setEndDate(125))

// store.dispatch(setEndDate())


//store.dispatch(setTextFilter("January"))
store.dispatch(setTextFilter("Water"))
//store.dispatch(setTextFilter("January"))



