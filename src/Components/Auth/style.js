
import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    container:{
        background: '#0F2027' ,
        // background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width:'100%',
        height:'100vh',
        padding:'10px'
    },
    paper:{
        width:"85%",
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        margin: theme.spacing(5,0,0,0),
    },
    submit:{
        margin: theme.spacing(3, 0, 2,10),
        color:'red'
    },
    para:{
        color:'blue'
    }
}))