import React from "react"
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount,setEndDate,setStartDate } from "../actions/filters";
import {DateRangePicker} from "react-dates"


class ExpenseListFilters extends React.Component{
    state={
        calanderFocused:null
    }
    handleDateChange = ({startDate,endDate}) =>{

        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    }
    onFocusChange= (calanderFocused)=>{
        this.setState(()=>{
            return {
                calanderFocused:calanderFocused
            }
        })

    }
    render(){
        return (
            <div>
                   <input type="text"
                value={this.props.filters.text}
                onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
    
                }}
                />
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    if(e.target.value == "date"){
                        props.dispatch(sortByDate())
                    
                    }else{
                        props.dispatch(sortByAmount())
                    }
                }}> 
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.handleDateChange}
                focusedInput={this.state.calanderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>{
                    return false
                }}
                showClearDates={true}
                />
             
                
            </div>
        )
    }
    
    
}


const mapPropsToState = (state) =>{
    return {
        filters:state.filters
    }
}


export default connect(mapPropsToState)(ExpenseListFilters)

