import { Container,Button, TextField, Box,Paper,Checkbox,InputLabel,Select,MenuItem } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {getcars} from '../../actions/action'
import Cars from '../Cars/Cars';
import useStyle from './style'
import {useSelector} from 'react-redux'
import Brands from './Brands';
import cities from '../../utils/cities'

const Buy = () => {
    const classes=useStyle();
    const dispatch=useDispatch();
    const [popup,setPopup]=useState(true);
    const [price,setPrice]=useState({c1:'false',c2:'false',c3:'false',c4:'false'});
    const [filterdata,setFilterdata]=useState({location:'',Sprice:'',Eprice:'',brand:[]})
    const sellers_data=useSelector((state)=>state.sell.cars)
    const [sellers,setSellers]=useState([]);
    const [errcheck,setErrcheck]=useState('');
    const [len,setLen]=useState(false)

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('profile'))?.result
        setLen(false)
        if(typeof(sellers_data)!=='undefined'){
            const clone=sellers_data.map((seller)=>{
                const yes=seller.cars_for_sale.filter((car)=>{
                    return (filterdata.brand.length===0 || filterdata.brand.includes(car.brand.toLowerCase()) ) 
                    && car.selling_price!=null 
                    && (car.city===filterdata.location || filterdata.location==='')  
                    && filterdata.Sprice<=car.selling_price 
                    && car.selling_price<=filterdata.Eprice
                    && car.status===false
                })
                if(yes.length!==0){
                    setLen(true)
                }
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
        if(filterdata.location===''){
            setErrcheck('Kindly enter desired location')
            setTimeout(()=>{
                setErrcheck('')
            },3000)
        }
        else{
            setPopup(false)
        }
    }

    return (
        <Container>
            <Box  display="flex" flexDirection="row" p={1} m={1} spacing={10} className={classes.mainc}>
                <Box item paddingRight={1} className={classes.filters}>
                    <Button color="primary" onClick={()=>setFilterdata({location:'',Sprice:0,Eprice:Number.MAX_VALUE,brand:''})}>Clear all filters</Button>
                    <Box >
                        <p style={{color:'blue'}}>Search By location</p>
                        <Button variant="contained" color="primary" onClick={()=>setPopup(true)}>{filterdata?.location?filterdata.location.toString():'Search'}</Button>
                    </Box>
                    <hr></hr>
                    <Box display="flex" flexDirection="column">
                        <p style={{color:'blue'}}>Search By Prices</p>
                        <Box item display="flex" flexDirection="row" >
                            <Checkbox onChange={handleChange} name="c1"></Checkbox>
                            <label className={classes.locationdiv} htmlFor="c1">0-2 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c2"></Checkbox>
                            <label className={classes.locationdiv} htmlFor="c2">2-5 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c3"></Checkbox>
                            <label className={classes.locationdiv} htmlFor="c3">5-10 lakh</label>
                        </Box>
                        <Box item display="flex" flexDirection="row">
                            <Checkbox onChange={handleChange} name="c4"></Checkbox>
                            <label className={classes.locationdiv} htmlFor="c4">10+ lakh</label>
                        </Box> 
                    </Box>
                    <hr></hr>
                    <Box>
                        <Brands filterdata={filterdata} setFilterdata={setFilterdata}/>
                    </Box>

                    {popup && 
                    <Paper className={classes.bgview}>
                        <div className={classes.popup}>
                            <p style={{color:'blue'}}>Search Cars By Location</p>
                            {errcheck && <Alert severity="error">{errcheck}</Alert>}
                            <Box display="flex" container flexDirection="column" alignItems="center" >
                                <Box item p={1} m={1} >
                                    <InputLabel id="label">Select City</InputLabel>
                                    <Select className={classes.fields} name="location" onChange={handleChange} labelId="label" id="select" value={filterdata.location}>
                                    {cities.map(city=>{
                                        return <MenuItem key={city} value={city}>{city}</MenuItem>
                                    })}
                                    </Select>
                                </Box>
                                <Box item>
                                    <Button className={classes.btn} size="large" color="primary" variant="contained" onClick={handlePopupSubmit}>Search</Button>
                                </Box>
                            </Box>
                        </div>
                    </Paper>
                    }
                </Box>
                <Box item >
                    <Cars cars={sellers} len={len}></Cars>
                </Box>
            </Box>
        </Container>
    )
}

export default Buy  

