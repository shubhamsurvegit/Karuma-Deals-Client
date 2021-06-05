import {React,useState} from 'react'
import {Grid,Paper,Button,TextField,Card} from '@material-ui/core'
import InsertPhotoSharpIcon from '@material-ui/icons/InsertPhotoSharp';

const Form2 = ({formData,step,back,submit,handleChange,encode}) => {
    const paper={padding:'10px',height:450,width:260,margin:'20px auto'}
    const {image1,image2,image3,image4,image5}=formData.images
    const [popup,setPopup]=useState('');
    return (
        <Paper style={paper}>
            <div>
                <Grid container spacing={1}> 
                    <Grid item >
                        {image1===''?
                            <Button variant="contained" color="primary"><label htmlFor="image1"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup(image1)} style={{width:"70px"}} src={image1}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image1" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image2===''?
                            <Button variant="contained" color="primary"><label htmlFor="image2"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" style={{width:"70px"}} src={image2}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image2" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image3===''?
                            <Button variant="contained" color="primary"><label htmlFor="image3"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" style={{width:"70px"}} src={image3}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image3" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image4===''?
                            <Button variant="contained" color="primary"><label htmlFor="image4"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" style={{width:"70px"}} src={image4}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image4" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image5===''?
                            <Button variant="contained" color="primary"><label htmlFor="image5"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" style={{width:"70px"}} src={image5}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image5" style={{display:'none'}}></input>
                    </Grid>
                </Grid>
            </div>
            {popup!=='' && 
            <Paper style={{margin:'-100px -110px'}}maxWidth="lg">
                <p>cross</p>
                <img alt="car" style={{width:"500px"}} src={popup}></img>
            </Paper>
            }

            <Card>
                <p>{formData.year},{formData.brand} {formData.model}</p>
                <p>{formData.ownership} Owner, {formData.price}, {formData.city}</p>
            </Card>

            <form>
                <TextField onChange={handleChange} margin="normal" name="selling_price" placeholder="Selling Price"></TextField>
                <TextField margin="normal" label="Name" variant="outlined" defaultValue="Shubham"></TextField>
                <TextField onChange={handleChange} name="contact" margin="normal" label="Contact" variant="outlined"></TextField>
                {step>0 && <Button onClick={back} variant="contained" color="secondary">Back</Button>}
                <Button onClick={submit} variant="contained" color="primary">Sell Car</Button>
            </form>
        </Paper>
    )
}

export default Form2
