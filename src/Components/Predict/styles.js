import {makeStyles} from '@material-ui/core/styles'



export default makeStyles((theme)=>({
    fields:{
        width:'200px',
    },
    err:{   
        margin:'10px',
    },
    paper:{
        width:'25%',
        margin:'10px auto',
        padding:'15px 15px 0px 15px',
        position:'absolute',
        top:'23%',
        left:'35%',
        [theme.breakpoints.down(780)]: {
            width:'60%',
            margin:'10px auto',
            top:'35%',
            left:'17%',
        }

    },
    container:{
        width:'100%',
        height:'115vh',
        padding:'8px',
        backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)',
        [theme.breakpoints.down(780)]: {
            height:'135vh',
        }
        
    },
    text:{
        color:'white',
        padding:'0px 50px'
    }
}))

