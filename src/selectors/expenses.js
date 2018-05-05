export default  (expenses,filters) =>{

    
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