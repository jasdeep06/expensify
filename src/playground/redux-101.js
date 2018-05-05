import {createStore} from "redux"


const countReducer = (state={count:0},action)=>{

    switch(action.type){
        case("INCREMENT"):
            return {
                count: state.count+action.incrementBy
            }
            
        case("DECREMENT"):
            return {
                count:state.count- action.decrementBy
            }
        
        case("RESET"):
            return{
                count:0
        } 
        case("SET"):
            return {
                count:action.value
            }
        default:
            return state
    }
    

    
}


const store=createStore(countReducer)

const increaseCount = ({incrementBy=1}={}) =>{
    return {
        type:"INCREMENT",
        incrementBy:incrementBy
    }
}



const decreaseCount=({decrementBy=1}={})=>{
    return {
        type:"DECREMENT",
        decrementBy:decrementBy


    }
}


const resetCount=()=>{
    return {
        type:"RESET"
    }
}

const setCount = ({value}) =>{
    return {
        type:"SET",
        value:value
    }
}


const unsubscribe=store.subscribe(()=>{
    
    return console.log(store.getState())
})


store.dispatch(increaseCount({incrementBy:5}))

store.dispatch(increaseCount())

store.dispatch(decreaseCount({decrementBy:3}))

store.dispatch(resetCount())

store.dispatch(setCount({value:101}))

