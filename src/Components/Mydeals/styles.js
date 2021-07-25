import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({    
    container:{
        width:'100%',
        height:'100%',
        margin:'35px 0px',
        padding:'0px 80px',
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)',
        color:'white'

    },
    msg:{ 
        padding:'50px',
        textAlign:'left'
    }
}))