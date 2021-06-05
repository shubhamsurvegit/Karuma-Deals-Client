import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getcars} from '../../actions/action'
import Cars from '../Cars/Cars';


const Buy = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getcars())
    },[dispatch])
    return (
        <div>
            <p>Buy Car</p> 
            <Cars/>
        </div>
    )
}

export default Buy  
