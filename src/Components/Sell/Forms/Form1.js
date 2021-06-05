import React from 'react'
import {Paper,Button, TextField} from '@material-ui/core'
const Form1 = ({formData,handleChange,Continue}) => {
    const paper={padding:'10px',height:450,width:260,margin:'20px auto'}
    return (
            <Paper style={paper} elevation={10}>
                <h2>Sell your Car</h2>
                <form> 
                        <TextField name="brand" placeholder="Brand" required
                            value={formData.brand} onChange={handleChange}>
                        </TextField>
                        <TextField margin='normal' name="model" placeholder="Model" required
                             value={formData.model} onChange={handleChange}
                        ></TextField>
                        <TextField margin='normal' name="year" placeholder="Year" required
                            value={formData.year} onChange={handleChange}></TextField>
                        <TextField margin='normal' name="ownership" placeholder="Ownership" required
                             value={formData.ownership} onChange={handleChange}>
                         </TextField>
                         <TextField margin='normal' name="city" placeholder="City" required
                         value={formData.city} onChange={handleChange}
                         ></TextField>
                        <TextField margin='normal' name="price" placeholder="Expected Price" required
                         value={formData.price} onChange={handleChange}
                         ></TextField>
                        <Button onClick={Continue} variant="contained" color="primary">Next</Button>
                </form>
            </Paper>
    )
}

export default Form1
