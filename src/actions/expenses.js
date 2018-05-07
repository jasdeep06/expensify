
import uuid from "uuid"
export const addExpense = ({description="",note="",amount=0,createdAt=0}={}) =>{
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


export const removeExpense =(removeId)=> {
    return {
        type:"REMOVE_EXPENSE",
        id:removeId

    }

}


export const editExpense = (editId,editedExpense) =>{
    return {
        type:"EDIT_EXPENSE",
        editId:editId,
        editedExpense:editedExpense

    }
}

