import React,{useEffect, useState} from 'react'
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import {listcar} from '../../actions/action'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Container,Button} from '@material-ui/core'
import useStyles from './styles'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const Sell = () => {
    const classes=useStyles();
    const [step,setStep]=useState(0);
    const dispatch=useDispatch();
    const history=useHistory();
    const [errcheck,setErrcheck]=useState('');
    const [formData,setFormData]=useState({
        brand:'',model:'',year:'',city:'',kms_driven:'',fuel_type:'',selling_price:'',images:{
            image1:'',image2:'',image3:'',image4:'',image5:''}
    });

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('profile'))?.result.name
        if(typeof user==='undefined'){
            setStep(2)
        }
    },[setStep])

    const encode=(e)=>{
        const file=e.target.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          const srcData = fileLoadedEvent.target.result;
          formData.images[e.target.id]=srcData // og code
          setFormData({...formData})
        }
        fileReader.readAsDataURL(file);
    }

    const handleChange=(e)=>{
        const name=e.target.name;
        setFormData({...formData,[name]:e.target.value});
    }
    
    const Continue=()=>{
        if(!formData.brand || !formData.model || !formData.year || !formData.city || !formData.kms_driven || !formData.fuel_type){
          setErrcheck('Kindly Fill in all fields')
        }
        else if(isNaN(formData.year)|| isNaN(formData.year)){
            setErrcheck('Invalid Input')
        }
        else if(formData.year<1950 || formData.year>new Date().getFullYear()){
            setErrcheck('Year Range 1950 - current year')
        }
        else{
          setStep(step+1)
        }
        setTimeout(()=>{
            setErrcheck('')
        },3000)
    }

    const back=()=>{
        setStep(step-1)
    }

    const submit=()=>{
        // if(!formData.images.image1 || !formData.images.image2 || !formData.images.image3 || !formData.images.image4 || !formData.images.image5 ){
        //     setErrcheck('Kindly add all images')
        // }
        if(!formData.selling_price){
            setErrcheck('Kindly add selling price')
        }
        else{
            console.log(formData)
        dispatch(listcar(formData,history))
        }
        setTimeout(()=>{
            setErrcheck('')
        },3000)
    }


    const props={formData,step,handleChange,Continue,back,submit,encode,errcheck,setFormData}

    
    switch(step){
        case 0:
            return (
                <Container className={classes.container} >
                 
                    <Form1 {...props} />
                </Container>
            )
        case 1:
            return(
                <Container className={classes.container}>
                    <Form2 {...props}/>
                </Container>
            )
        default:
            return(
                <Dialog
                  open={true}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Make Sure You are Logged In before proceeding further!"}</DialogTitle>
                <DialogActions>
                  <Button varinat="contained" href="/auth" color="primary">
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
            )
    }

}

export default Sell
