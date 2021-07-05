import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(()=>({    
    container:{
        color:'blue',
        position:'fixed',
        backgroundColor:'white',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'65%',
        height:'85%'
    },
    view:{
        position:'fixed',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        backgroundColor:'rgba(0,0,0,0.7)',
    },
    corousel:{
        width:'70%',
        height:'70%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        margin:'10px auto',
        backgroundColor:'blue'
    },
    left:{
        position:'fixed',
        top:'34%',
        left:'17%',
        cursor:'pointer'
    },
    right:{
        position:'fixed',
        top:'35%',
        left:'80%',
        cursor:'pointer'
    },
    close:{
        position:'fixed',
        top:'2%',  
        left:'92%',
        color:'red'
    }
}))