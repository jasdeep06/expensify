import React from "react"
import {Link} from "react-router-dom"

const ExpenseListItem = ({dispatch,id,createdAt,description,amount}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
       
        
            <p>{createdAt + " "  + amount}</p>
           
      </div>      
    )


}

export default ExpenseListItem
