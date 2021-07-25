import React from 'react'
import Alert from '@material-ui/lab/Alert';
import {Paper,Button, TextField,Grid,InputLabel,Select,MenuItem} from '@material-ui/core'
import {fuel_types,brands,models} from '../../Predict/fields'
import useStyle from '../styles'
import cities from '../../../utils/cities'

const Form1 = ({formData,handleChange,Continue,errcheck}) => {
    const classes=useStyle()
    return (
            <Paper className={classes.paper} elevation={10}>
                <h2>Sell your Car</h2>
                {errcheck && <Alert className={classes.err} severity="error">{errcheck}</Alert>}
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <InputLabel id="label">Select Brand</InputLabel>
                        <Select className={classes.fields} variant="standard" name="brand" onChange={handleChange} labelId="label" id="select" value={formData.brand}>
                            {brands.map(brand=>{
                                return <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Select Model</InputLabel>
                        <Select className={classes.fields} name="model" onChange={handleChange} labelId="label" id="select" value={formData.model}>
                        {models.map(model=>{
                            if(model.toLowerCase().includes(formData.brand.toLowerCase()))
                                return <MenuItem key={model} value={model}>{model}</MenuItem>
                            return null;
                        })}
                        </Select>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Select City</InputLabel>
                        <Select className={classes.fields} name="city" onChange={handleChange} labelId="label" id="select" value={formData.city}>
                            {cities.map(city=>{
                                return <MenuItem key={city} value={city}>{city}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Enter Year of Purchase</InputLabel>
                        <TextField value={formData.year} className={classes.fields}  onChange={handleChange} size="small" name="year" placeholder="eg 2016"></TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Enter Kilometers Driven</InputLabel>
                        <TextField value={formData.kms_driven} className={classes.fields} onChange={handleChange} size="small" name="kms_driven" placeholder="eg 5000"></TextField>
                    </Grid>
                    <Grid item>
                        <InputLabel id="label">Fuel Type</InputLabel>
                        <Select className={classes.fields} onChange={handleChange} name="fuel_type" labelId="label" id="select" value={formData.fuel_type}>  
                            {fuel_types.map(fuel_type=>{
                                return <MenuItem key={fuel_type} value={fuel_type}>{fuel_type}</MenuItem>             
                            })} 
                        </Select>
                    </Grid>
                    <Grid item>
                        <Button onClick={Continue} variant="contained" color="primary">Next</Button>
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default Form1
