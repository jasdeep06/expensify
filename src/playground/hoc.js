import React from "react"
import ReactDOM from "react-dom"


const ComponentOne = (props) => {
    return (
        <div>
            <p>The info: {props.info}</p>
        </div>
    )
}

ReactDOM.render(<ComponentOne info="This is it"/>,document.getElementById("app"))