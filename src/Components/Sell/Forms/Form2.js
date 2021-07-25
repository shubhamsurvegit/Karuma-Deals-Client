import {React,useState} from 'react'
import {Grid,Paper,Button,TextField,Card,Container} from '@material-ui/core'
import InsertPhotoSharpIcon from '@material-ui/icons/InsertPhotoSharp';
import Alert from '@material-ui/lab/Alert';
import useStyle from '../styles'
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

const Form2 = ({formData,step,back,submit,handleChange,encode,errcheck,setFormData}) => {
    const classes=useStyle() 
    const paper={padding:'10px',height:520,width:280,margin:'50px auto',padding:'10px 30px'}
    const user=JSON.parse(localStorage.getItem('profile'))?.result
    const {image1,image2,image3,image4,image5}=formData.images
    const [popup,setPopup]=useState('');
    
    const handleRemove=()=>{
        formData.images[popup]='';
        setFormData(formData)
        setPopup('')
    }
    return (
        <div>
        <Paper style={paper}>
             {errcheck && <Alert className={classes.err} severity="error">{errcheck}</Alert>}
            <div>
                <Grid container spacing={1}> 
                    <Grid item >
                        {image1===''?
                            <Button variant="contained" color="primary"><label htmlFor="image1"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup('image1')} style={{width:"70px",height:'50px'}} src={image1}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image1" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image2===''?
                            <Button variant="contained" color="primary"><label htmlFor="image2"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup('image2')} style={{width:"70px",height:'50px'}} src={image2}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image2" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image3===''?
                            <Button variant="contained" color="primary"><label htmlFor="image3"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup('image3')}  style={{width:"70px",height:'50px'}} src={image3}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image3" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image4===''?
                            <Button variant="contained" color="primary"><label htmlFor="image4"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup('image4')} style={{width:"70px",height:'50px'}} src={image4}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image4" style={{display:'none'}}></input>
                    </Grid>
                    <Grid item>
                        {image5===''?
                            <Button variant="contained" color="primary"><label htmlFor="image5"><InsertPhotoSharpIcon/></label></Button>
                            :<img alt="car" onClick={()=>setPopup('image5')} style={{width:"70px",height:'50px'}} src={image5}></img>
                        }
                        <input onChange={(e)=>encode(e)} type="file" id="image5" style={{display:'none'}}></input>
                    </Grid>
                </Grid>
            </div>
            <Card style={{padding:'10px' ,margin:'10px'}}>
                <p>{formData.year}, {formData.brand}, {formData.model}</p>
                <p>{formData.kms_driven } kms, {formData.fuel_type}, {formData.city}</p>
            </Card>

            <form>
            <label>Predicted price</label>
                <TextField label="Selling Price" variant="outlined" onChange={handleChange} margin="normal" name="selling_price" defaultValue={formData.selling_price} placeholder="Selling Price"></TextField>
               
                <TextField margin="normal" label="Name" variant="outlined" defaultValue={user.name}></TextField>
                <TextField onChange={handleChange} defaultValue={user.phone} name="contact" margin="normal" label="Contact" variant="outlined"></TextField>
                {step>0 && <Button onClick={back} variant="contained" color="secondary">Back</Button>}
                <Button style={{marginLeft:'10px'}} onClick={submit} variant="contained" color="primary">Sell Car</Button>
            </form>
        </Paper>
        {popup!=='' && 
            <Container maxWidth="xl" className={classes.pops}>
                <div className={classes.icon}>
                    <CloseIcon onClick={()=>setPopup('')}></CloseIcon>
                    <DeleteIcon onClick={handleRemove}>Remove</DeleteIcon>
                </div>
                <img alt="car" className={classes.images} src={formData.images[popup]}></img>
            </Container>
            }

        </div>
    )
}

export default Form2
