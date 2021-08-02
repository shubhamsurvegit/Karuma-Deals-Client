import axios from 'axios'
const url="http://localhost:5000"


export const login=(userData,history)=>
    async (dispatch)=>{
        axios.post(`${url}/login`,userData)
        .then(({data})=>{
            dispatch({type:'AUTH',data})
            history.push('/')
        })
        .catch((res)=>{
            console.log(res)
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

export const mydeals=()=>
    async (dispatch)=>{
        const head=addtoken();
        axios.get(`${url}/mydeals`,head)
        .then(({data})=>{
            console.log(data)
            dispatch({type:'FETCH_DEALS',payload:data})
        })
        .catch((err)=>console.log(err))
    }    

export const soldcar=(id)=>
    async (dispatch)=>{
        const head=addtoken();
        axios.post(`${url}/soldcar`,{id:id},head)
        .then(({data})=>{
            dispatch({type:'SOLDCAR',payload:data})
        })
        .catch((err)=>console.log(err))
    }

export const removedeal=(id)=>
    async (dispatch)=>{
        const head=addtoken();
        axios.post(`${url}/removedeal`,{id:id},head)
        .then(({data})=>{
            dispatch({type:'REMOVE_DEAL',payload:data})
        })
        .catch((err)=>console.log(err))
    }