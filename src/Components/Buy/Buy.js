import { Container,Button, TextField, Box,Paper,Checkbox } from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {getcars} from '../../actions/action'
import Cars from '../Cars/Cars';
import useStyle from './style'
import {useSelector} from 'react-redux'
import Brands from './Brands';
const Buy = () => {
    const classes=useStyle();
    const dispatch=useDispatch();
    const [popup,setPopup]=useState(true);
    const [price,setPrice]=useState({c1:'false',c2:'false',c3:'false',c4:'false'});
    const [filterdata,setFilterdata]=useState({location:'',Sprice:'',Eprice:'',brand:[]})
    const sellers_data=useSelector((state)=>state.sell.cars)
    const [sellers,setSellers]=useState([]);

    useEffect(()=>{
        console.log(filterdata)
        if(typeof(sellers_data)!=='undefined'){
            const clone=sellers_data.map((seller)=>{
                const yes=seller.cars_for_sale.filter((car)=>{
                    return (filterdata.brand.length===0 || filterdata.brand.includes(car.brand.toLowerCase()) ) 
                    && car.selling_price!=null 
                    && (car.city===filterdata.location || filterdata.location==='')  
                    && filterdata.Sprice<=car.selling_price 
                    && car.selling_price<=filterdata.Eprice
                })
                return {...seller,cars_for_sale:yes}
            })
            setSellers(clone)
        }
    },[filterdata])

    useEffect(()=>{
        var Sprice=Number.MAX_VALUE;
        var Eprice=Number.MIN_VALUE;
        var d=false;
        for(const p in price){
            if(price[p]===true){
                d=true;
                if(p==='c1'){
                    Sprice=Math.min(Sprice,0);
                    Eprice=Math.max(Eprice,200000)
                }
                else if(p==='c2'){
                    Sprice=Math.min(Sprice,200001);
                    Eprice=Math.max(Eprice,500000);
                }
                else if(p==='c3'){ 
                    Sprice=Math.min(Sprice,500001);
                    Eprice=Math.max(Eprice,1000000);
                }
                else if(p==='c4'){
                    Sprice=Math.min(Sprice,1000001);
                    Eprice=Math.max(Eprice,10000000000);
                }
            }
        }
        if(!d){
            Sprice=0;
            Eprice=Number.MAX_VALUE;
        }
        setFilterdata({...filterdata,Sprice:Sprice,Eprice:Eprice})
    },[price])


    useEffect(()=>{
        setSellers(sellers_data)
    },[sellers_data])

    useEffect(()=>{
        dispatch(getcars())
    },[])
    
    const handleChange=(e)=>{
        if(e.target.type==='checkbox'){
            if(e.target.name==='c1'){
                setPrice({...price,c1:e.target.checked})
            }
            else if(e.target.name==='c2'){
                setPrice({...price,c2:e.target.checked})
            }
            else if(e.target.name==='c3'){
                setPrice({...price,c3:e.target.checked})
            }
            else{
                setPrice({...price,c4:e.target.checked})
            }
        }
        else{
            setFilterdata({...filterdata,[e.target.name]:e.target.value})
        }
    }
    
    const handlePopupSubmit=(e)=>{
        // const filtersellers=sellers_data.map((seller)=>{
        //     const yes=seller.cars_for_sale.filter((car)=>{
        //         return car.selling_price!=null && car.city===filterdata.location && filterdata.Sprice<=car.selling_price && car.selling_price<=filterdata.Eprice
        //     })
        //     return {...seller,cars_for_sale:yes}
        // })
        setPopup(false)
    }

    return (
        <Container>
            <Box display="flex" flexDirection="row" p={1} m={1} spacing={10}>
                <Box item paddingRight={15}>
                    <p>Filters</p>
                    <Button onClick={()=>setFilterdata({location:'',Sprice:0,Eprice:Number.MAX_VALUE,brand:''})}>Clear all filters</Button>
                    <Box>
                        <p>Search By location</p>
                        <Button variant="contained" color="primary" onClick={()=>setPopup(true)}>{filterdata?.location?filterdata.location.toString():'Search'}</Button>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <p>Search By Prices</p>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c1"></Checkbox>
                            <label htmlFor="c1">0-2 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c2"></Checkbox>
                            <label htmlFor="c2">2-5 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c3"></Checkbox>
                            <label htmlFor="c3">5-10 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c4"></Checkbox>
                            <label htmlFor="c4">10+ lakh</label>
                        </Box> 
                    </Box>
                  
                    <Box>
                        <Brands filterdata={filterdata} setFilterdata={setFilterdata}/>
                    </Box>

                    {popup && 
                    <Paper className={classes.bgview}>
                        <div className={classes.popup}>
                            <TextField placeholder="enter city" type="text" name="location" onChange={handleChange}></TextField>
                            <Button onClick={handlePopupSubmit}>Search</Button>
                        </div>
                    </Paper>
                    }
                </Box>
                <Box item >
                    <Cars cars={sellers}></Cars>
                </Box>
            </Box>
        </Container>
    )
}

export default Buy  
