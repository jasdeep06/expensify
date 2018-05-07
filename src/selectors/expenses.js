import moment from "moment"
export default  (expenses,filters) =>{

    
    return expenses.filter((expense)=>{

        const createdAtMoment=moment(expense.createdAt)
        const matchedStartDate =  filters.startDate ? createdAtMoment.isSameOrAfter(filters.startDate,"day"):true
        const matchedEndDate =  filters.endDate ? createdAtMoment.isSameOrBefore(filters.endDate,"day"):true
        
        
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