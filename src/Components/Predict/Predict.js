import { Container, Grid ,TextField,InputLabel,Select,MenuItem, Button,Paper} from '@material-ui/core'
import React,{useState} from 'react'
import {fuel_types,brands,models} from './fields'
import Alert from '@material-ui/lab/Alert';
import useStyle from './styles'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRupeeSign } from '@fortawesome/free-solid-svg-icons'

const Predict = () => {
    const classes=useStyle();
    const url='https://shrouded-lowlands-06079.herokuapp.com'
    const [errcheck,setErrcheck]=useState('');
    const [prediction,setPrediction]=useState('');
    const [predictData,setPredictData]=useState({brand:'',model:'',year:'',kms_driven:'',fuel_type:''})
    
    const handleChange=(e)=>{
        setPredictData({...predictData,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=()=>{
        if(predictData.brand==='' || predictData.model==='' || predictData.year==='' || predictData.kms_driven==='' || predictData.fuel_type===''){
            setErrcheck('Kindly fill in all fields.')
        }
        else if(isNaN(predictData.year)|| isNaN(predictData.year)){
            setErrcheck('Invalid Input')
        }
        else if(predictData.year<1950 || predictData.year>new Date().getFullYear()){
            setErrcheck('Year Range 1950 - current year')
        }
        else{
            const data={
                brand:predictData.brand,
                model:predictData.model.toString().split(" ").splice(0,3).join(" "),
                year:predictData.year,
                kms_driven:predictData.kms_driven,
                fuel_type:predictData.fuel_type
            }
            axios.post(url+'/predict',data)
            .then(({data})=>{
                if(data<0){
                    data=Math.abs(data)
                }
                setPrediction(Math.round(data).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        setTimeout(()=>{
            setErrcheck('')
        },3000)
    }
    return (
        <Container  component="main" className={classes.container}>
            <h3 className={classes.text}>Confused at what price you want to sell your Car? Predict here!</h3>
            <Paper className={classes.paper} >
            <h2>Predict Price</h2>
            {errcheck && <Alert className={classes.err} severity="error">{errcheck}</Alert>}
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <InputLabel id="label">Select Brand</InputLabel>
                        <Select className={classes.fields} variant="standard" name="brand" onChange={handleChange} labelId="label" id="select" value={predictData.brand}>
                            {brands.map(brand=>{
                                return <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Select Model</InputLabel>
                        <Select className={classes.fields} name="model" onChange={handleChange} labelId="label" id="select" value={predictData.model}>
                        {models.map(model=>{
                            if(model.toLowerCase().includes(predictData.brand.toLowerCase()))
                                return <MenuItem key={model} value={model}>{model}</MenuItem>
                            return null;
                        })}
                        </Select>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Enter Year of Purchase</InputLabel>
                        <TextField  onChange={handleChange} size="small" name="year" placeholder="eg 2016"></TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Enter Kilometers Driven</InputLabel>
                        <TextField  onChange={handleChange} size="small" name="kms_driven" placeholder="eg 5000"></TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Fuel Type</InputLabel>
                        <Select className={classes.fields} onChange={handleChange} name="fuel_type" labelId="label" id="select" value={predictData.fuel_type}>  
                            {fuel_types.map(fuel_type=>{
                                return <MenuItem key={fuel_type} value={fuel_type}>{fuel_type}</MenuItem>             
                            })} 
                        </Select>
                    </Grid>
                    <Grid item container direction="row" spacing={3} >
                        <Grid item>
                            <Button onClick={handleSubmit} variant="contained" color="primary">Predict</Button>
                        </Grid>
                        <Grid item>
                          <p className={classes.output}><FontAwesomeIcon icon={faRupeeSign} /> {prediction}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Predict
