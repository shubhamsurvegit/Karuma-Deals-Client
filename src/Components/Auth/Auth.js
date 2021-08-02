import React,{useState} from 'react'
import {Container,Grid,Paper,Typography,TextField, Button} from '@material-ui/core'
import useStyles from './style'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

import {login,register} from '../../actions/action'
const Auth = () => {
    const history=useHistory();
    const dispatch=useDispatch();
    const classes=useStyles();
    const [errcheck,setErrcheck]=useState('');
    const [isSignUp,setIsSignUp]=useState(false);
    const [formData,setFormData]=useState({
        name:'',phone:'',email:'',password:'',confirmPassword:''
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleClick=((e)=>{
        setIsSignUp(!isSignUp);
        setErrcheck(false)
    })

    const handleSubmit=(e)=>{   
        e.preventDefault();
        if(isSignUp){
            if(!formData.name || !formData.phone || !formData.password || !formData.confirmPassword){
                setErrcheck("Kindly fill in all fields.")
            }
            else if(formData.password!==formData.confirmPassword){
                setErrcheck('Password do not match.')
            }
            else{
                dispatch(register(formData,history))
            }
        }
        else{
            if( !formData.phone || !formData.password){
                setErrcheck("Kindly fill in all fields.")

            }
            else{
                dispatch(login(formData,history))
            }
        }
        setTimeout(()=>{
            setErrcheck('')
        },3000)
    }

    

    return (
        <div className={classes.container}>
        <Container  component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.para}>{isSignUp?'Register':'Login'}</Typography> 
                {errcheck && <Alert severity="error">{errcheck}</Alert>}
                <form className={classes.form}>
                    <Grid container space={3} spacing={2} justify='flex-start'>
                        {isSignUp && <Grid item>
                        <TextField onChange={handleChange} size="small" name="name" placeholder="Enter Name" type="text" variant="outlined"></TextField>
                        </Grid>}
                        <Grid item>
                            <TextField onChange={handleChange} size="small" name="phone" placeholder="Enter Your Mobile Number" type="number" variant="outlined"></TextField>
                        </Grid>
                        {isSignUp && <Grid item>
                            <TextField onChange={handleChange} size="small" name="email" placeholder="Enter Your Email" type="email" variant="outlined"></TextField>
                        </Grid>}
                        <Grid item>
                            <TextField onChange={handleChange} size="small" name="password" placeholder="Enter Password" type="password" variant="outlined"></TextField>
                        </Grid>
                        {isSignUp && <Grid item>
                            <TextField onChange={handleChange} size="small" name="confirmPassword" placeholder="Confirm Password" type="password" variant="outlined"></TextField>
                        </Grid>}
                    </Grid>
                        <Grid container spacing={2}>
                            <Grid item >
                                <Button onClick={handleSubmit} variant="contained" color="primary">{isSignUp?'Sign Up':'Sign In'}</Button>
                            </Grid>
                        </Grid>
                </form>
                <Button onClick={handleClick} className={classes.submit} size="small">
                    {isSignUp? 'Already have a account?':'Dont have a account?'}</Button>
            </Paper>
        </Container>
        </div>
    )
}

export default Auth