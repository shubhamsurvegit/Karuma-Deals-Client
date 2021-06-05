import {makeStyles} from '@material-ui/core/styles'
import zIndex from '@material-ui/core/styles/zIndex'

export default makeStyles(()=>({    
    container:{
        color:'blue',
        position:'fixed',
        backgroundColor:'white',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        zIndex:'1000',
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
        backgroundPosition:'center',
        margin:'10px auto '
    }
}))