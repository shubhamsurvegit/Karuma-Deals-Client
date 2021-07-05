
const reducer=(cars=[],action)=>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload
        case "Sell":
            return [...cars,action.payload]
        default:
            return cars
    }
}

export default reducer