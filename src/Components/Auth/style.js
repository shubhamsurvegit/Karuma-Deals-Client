
import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
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
    }
}))