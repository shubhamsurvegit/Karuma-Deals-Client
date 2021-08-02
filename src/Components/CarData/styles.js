import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({    
    container:{
        color:'blue',
        position:'fixed',
        backgroundColor:'white',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'55%',
        height:'75%',
        borderRadius:'10px',
        [theme.breakpoints.down(780)]: {
            height:'85%',
            top:'57%',
        }
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
        margin:'40px auto',
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
        color:'red',
        transform:'translate(-50%,-20%)',
    },
    msg:{
        fontSize:'20px',
        padding:'10px',
        margin:'10px',
        [theme.breakpoints.down(780)]: {
            fontSize:'15px',
            margin:'0px',
            padding:'5px',
            textAlign:'center'
        }
    }
}))