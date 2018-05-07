import React from "react"
import moment from "moment"
import {SingleDatePicker} from "react-dates"
import "react-dates/lib/css/_datepicker.css"


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description: props.expense ? props.expense.description:"",
            note:props.expense ? props.expense.note:"",
            amount:props.expense? props.expense.amount.toString():'',
            createdAt:props.expense?moment(props.expense.createdAt): moment(),
            calanderFocused:false,
            error:false
    
        }
    }

    handleDescription = (e) =>{
        const description = e.target.value
        this.setState(()=>{
            return {
                description:description
                
            }
        })

    }
    handleNote = (e)=>{
        const note=e.target.value
        this.setState(()=>{
            return {
                note:note
            }
        })
    }
    handleAmountChange = (e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                     amount:amount
                }
            })
        }
    }

    handleDateChange = (createdAt) =>{
        if(createdAt){
        this.setState(()=>{
            return {
                createdAt:createdAt
            }
        })

    }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>{
            return {
                calanderFocused:focused
            }
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()

        if(!this.state.description || !this.state.amount)
        {
            this.setState(()=>{
                return {
                    error:true
                }
            })
        }else{
            this.setState(()=>{
                return {
                    error:false
                }
            })
            //console.log("done")
            this.props.onSubmit({
                description:this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount),
                createdAt:this.state.createdAt.valueOf()

            })
           
        }


    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                {this.state.error && <p>Please fill out amount and description!</p>}
                <input type="text" 
                placeholder="Description" 
                autoFocus
                value={this.state.description}
                onChange={this.handleDescription}/>
                <input type="text" 
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.handleAmountChange} />
                <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.handleDateChange}
                focused={this.state.calanderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>{
                
                 return false
                }}
                />
                <textarea 
                placeholder="Note"
                value={this.state.note}
                onChange={this.handleNote}>
                </textarea>
                <button type="submit">Add Expense</button>
                </form>

            </div>
        )
    }
}
