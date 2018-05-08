import React from "react"
import {connect} from "react-redux"
import selectExpenses from "../selectors/expenses"
import numeral from "numeral"



const ExpenseSummary = ({numberOfExpenses,totalAmountOfExpenses}) =>{
    const expenseWord=numberOfExpenses === 1 ? "expense" :"expenses"
    const formattedExpense = numeral(totalAmountOfExpenses).format('$0,0.00');
    return (
        <div>
            <p>You are viewing {numberOfExpenses} {expenseWord} amounting to {formattedExpense}</p>

        </div>
    )

}

const findSumOfExpenses = (expenses) =>{

    let sum=0

    expenses.map((expense)=>{
        sum=sum+expense.amount
    })
    return sum

}


const mapStateToProps = (state) =>{

    
     const expenses=selectExpenses(state.expenses,state.filters)
     return {
         numberOfExpenses:expenses.length,
         totalAmountOfExpenses:findSumOfExpenses(expenses)
     }



};

export default connect(mapStateToProps)(ExpenseSummary)

