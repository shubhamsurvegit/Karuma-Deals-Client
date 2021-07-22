
import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    showcase:{
      display:'grid',
      gridTemplateColumns:'auto auto auto',
      gridGap:'0px',
      margin:'50px 0px 0px 88px',
      [theme.breakpoints.down(780)]: {
        gridTemplateColumns:'auto',
        marginLeft:'1px'
      }
    }
}));