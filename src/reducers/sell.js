
const reducer=(cars=[],action)=>{
    switch (action.type){
        case 'FETCH_ALL':
            console.log(action.payload)
            return action.payload
        case "Sell":
            return [...cars,action.payload]
        default:
            return cars
    }
}

export default reducer