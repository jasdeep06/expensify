export const setTextFilter = (newText="") => {

    return {
        type:"EDIT_TEXT",
        newText:newText
    }
}


export const sortByAmount = () =>{
    return {
        type:"SORT_BY_AMOUNT"
    }

}
export const sortByDate = () =>{
    return {
        type:"SORT_BY_DATE"
    }

}
export const setStartDate = (startDate) =>{
    return {
        type:"SET_START_DATE",
        startDate:startDate
    }

}
export const setEndDate = (endDate) =>{
    return {
        type:"SET_END_DATE",
        endDate:endDate

    }

}