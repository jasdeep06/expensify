import React from "react"
import ReactDOM from "react-dom"


// const WrappedComponent = (props) => {
//     return (
//         <div>
//             <p>The info: {props.info}</p>
//         </div>
//     )
// }

// const WrapperComponent = (WrappedComponent) =>{
//     return (props) => (
//         <div>
//             <p>This is private info.DO not share.</p>
//             <WrappedComponent {...props}/>
//         </div>
//     )

    

// }

// const WrappedInfo =WrapperComponent(WrappedComponent)

const UserInfo = (props) =>{
    return (
        <div>
            <p>hi {props.name}</p>
        </div>

    )
} 

const requireAuthentication = (WrappedComponent) =>{
    return (props) => {

    return (

        <div>
            {props.loggedIn ? <WrappedComponent {...props} /> : <p>Login to Continue</p>}
        </div>
    )

    }

}

const WrappedInfo=requireAuthentication(UserInfo)


ReactDOM.render(<WrappedInfo loggedIn = {true} name="Jasdeep"/>,document.getElementById("app"))