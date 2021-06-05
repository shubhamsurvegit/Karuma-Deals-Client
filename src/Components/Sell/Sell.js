import React,{useState} from 'react'
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import {listcar} from '../../actions/action'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Sell = () => {
    const [step,setStep]=useState(0);
    const dispatch=useDispatch();
    const history=useHistory();

    const [formData,setFormData]=useState({
        brand:'',model:'',year:'',ownership:'',city:'',price:'',selling_price:'',images:{
            image1:'',image2:'',image3:'',image4:'',image5:''},contact:''
    });

   

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
        setStep(step+1)
    }

    const back=()=>{
        setStep(step-1)
    }

    const submit=()=>{
        console.log(formData)
        dispatch(listcar(formData,history))
    }

    const props={formData,step,handleChange,Continue,back,submit,encode}

    
    switch(step){
        case 0:
            return (
                <div>
                    <Form1 {...props} />
                </div>
            )
        case 1:
            return(
                <div>
                    <Form2 {...props}/>
                </div>
            )
        default:
            return(
                <p>default</p>
            )
    }

}

export default Sell
