import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({    
    container:{
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)',
        width:'100%',
        height:'130vh',
        padding:'8px',
        zIndex:'-1',
        [theme.breakpoints.down(780)]: {
            height:'150vh',
        }
    },
    fields:{
        width:'200px'
    },
    err:{   
        margin:'10px',
    },
    paper:{
        height:'100%',
        width:'25%',
        margin:'10px auto',
        padding:'15px 15px 0px 15px',
        position:'absolute',
        top:'23%',
        left:'35%',
        [theme.breakpoints.down(780)]: {
            width:'60%',
            margin:'10px auto',
            top:'30%',
            left:'17%',
        },
    },
    pops:{
        width:"550px",
        height:'350px',
        zIndex:6,
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        color:'red',
        marginBottom:'10px',
        backgroundColor:'white',
        [theme.breakpoints.down(780)]: {
            width:"400px",
            margin:'10px',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
        },
    },
    images:{
        width:'500px',
        height:'300px',
        margin:'10px',
        [theme.breakpoints.down(780)]: {
            width:"350px",
            left:'10%',
            margin:'10px'
        },
    },
    icon:{
        float:'right',
        margin:'5px',
    }
}))