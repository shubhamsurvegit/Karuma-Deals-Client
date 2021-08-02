
import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    maing:{
      width:'100%',
      margin:'10px',
      display:'grid',
      gridGap:'20px',
      gridTemplateColumns:' repeat(2, 1fr)',
      [theme.breakpoints.down(900)]: {
        gridTemplateColumns:'auto ',
       
      },
      [theme.breakpoints.down(780)]: {
        gridTemplateColumns:'auto ',
        margin:'20px 0px',
        alignItems:'center',
      }
    }
}));