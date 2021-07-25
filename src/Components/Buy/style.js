import {makeStyles} from '@material-ui/core/styles'



export default makeStyles((theme)=>({
    mainc:{
        [theme.breakpoints.down(680)]: {
            display:'grid',
            gridTemplateColumns:'auto',
          }
    },
    popup:{
        borderRadius:'10px',
        backgroundColor:'white',
        color:'blue',
        position:'relative',
        top:'50%',
        left:'25%',
        transform:'translate(-50%,-50%)',
        width:'45%',
        height:'45%',
        zIndex:2,
        padding:'1px 15px',
        margin:'10px auto',
        textAlign:'left',
        fontSize:'20px'

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
    tf:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
    },
    locationdiv:{
        padding:'9px',
    },
    brands:{
        width: '160px',
        height: '310px',
        overflow:'scroll'
    },
    filters:{
        [theme.breakpoints.down(680)]: {
            margin:'auto'
          }
    },
    fields:{
        width:'200px'
    },
}))