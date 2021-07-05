import {makeStyles} from '@material-ui/core/styles'



export default makeStyles(()=>({
    popup:{
        color:'blue',
        position:'fixed',
        backgroundColor:'white',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'65%',
        height:'85%',
        zIndex:2
    },
    bgview:{
        backgroundColor:'rgba(0,0,0,0.7)',
        zIndex:1,
        position:'fixed',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
    },
    brands:{
        width: '160px',
        height: '310px',
        overflow:'scroll'
    }
}))