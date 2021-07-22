
const mydeals=(deals=[],action)=>{
    switch (action.type){
        case 'FETCH_DEALS':
            return action.payload
        case 'SOLDCAR':
            return action.payload
        case 'REMOVE_DEAL':
            return action.payload
        default:
            return null
    }
}

export default mydeals