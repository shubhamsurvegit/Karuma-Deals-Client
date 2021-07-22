import { makeStyles } from "@material-ui/core";
import bgimage from '../../bgimage.webp'

export default makeStyles((theme)=>({    
    container:{
        width:'100%',
        height:'180vh',
        margin:'auto',
        backgroundColor:'black',
        [theme.breakpoints.down(780)]: {
            height:'380vh'
        },
        zIndex:'-1'
    },
    showcase:{
        width:'100%',
        height:'100vh',
        margin:'auto ',
        background:`url(${bgimage}) no-repeat center bottom `,
        backgroundSize:'cover',
        opacity:'0.7',
        zIndex:'-1',
        
    },
    text:{
        textAlign:'center',
        color:'black',
        padding:'10px'
    },
    tabs:{
        color:'white',
        display:'grid',
        gridTemplateColumns:'auto auto auto',
        gridGap:'100px',
        alignContent:'center',
        justifyItems:'center',
        justifyContent:'center',
        margin:'10px auto',
        [theme.breakpoints.down(780)]: {
            gridTemplateColumns:'auto'
        }
    },
    tab:{
        cursor:'pointer',
        width:'300px',
        padding:'10px',
        height:'250px',
        margin:'10px auto',
        fontSize:'18px',
    },
    tabimg:{
        margin:'auto',
        width:'250px',
        height:'150px',
    },
    footer:{
        fontSize:'20px',
        color:'white',
        textAlign:'center',
        display:'grid',
        gridTemplateColumns:'auto auto',
        justifyContent:'center',
        gridGap:'400px',
        [theme.breakpoints.down(780)]: {
            gridTemplateColumns:'auto',
            gridGap:'40px',
        }

    },
    lists:{
        textDecoration:'none',
        color:'white'
    }
}))