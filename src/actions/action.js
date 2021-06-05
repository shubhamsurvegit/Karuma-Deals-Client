import axios from 'axios'
const url="http://localhost:5000"


export const login=(userData,history)=>
    async (dispatch)=>{
        console.log(userData)
        axios.post(`${url}/login`,userData)
        .then(({data})=>{
            dispatch({type:'AUTH',data})
            history.push('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

export const register= (userData,history)=>
    async (dispatch)=>{
        axios.post(`${url}/register`,userData)
        .then(({data})=>{
            dispatch({type:'AUTH',data})
            history.push('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

export const login_with_google=(userData,history)=>
    async (dispatch)=>{
        axios.post(`${url}/google/login`,userData)
        .then(({data})=>{
            console.log(data)
            dispatch({type:'AUTH',data})
            history.push('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

const addtoken=()=>{
    if(localStorage.getItem('profile')){
        const storage=JSON.parse(localStorage.getItem('profile'));
        const head={
            headers:{
                "x-access-token":storage.token   
            }
        }
        return head;
    }
    return null;
}

export const listcar=(cardata,history)=>
    async(dispatch) =>{
        console.log(cardata)
        const head=addtoken();
        axios.post(`${url}/sell`,cardata,head)
        .then(({data})=>{
            dispatch({type:"SELL",payload:data})
            history.push('/')
        })
        .catch((err)=>console.log(err))
    }

export const getcars=()=>
    async (dispatch)=>{
        axios.get(`${url}/getcars`)
        .then(({data})=>{
            dispatch({type:'FETCH_ALL',payload:data})
        })
        .catch((err)=>console.log(err))
    }