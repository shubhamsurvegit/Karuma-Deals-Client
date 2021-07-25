import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({    
    nav:{
        backgroundColor:'black',
        height:'80px',
        display:'flex',
        alignItems:'center',
        fontsize:'1.2rem',
        zIndex:'1000',
        [theme.breakpoints.down(780)]: {
            position:'relative',
        }
    },
    navmenu:{
        display:'grid',
        gridTemplateColumns:'auto auto auto auto auto',
        gridGap:'30px',
        listStyle:'none',
        textAlign:'center',
        justifyContent:'end',
        marginRight:'5rem',
        paddingLeft:'100px',
        [theme.breakpoints.down(780)]: {
            color:'black',
            display:'flex',
            flexDirection:'column',
            width:'100%',
            height:'500px',
            position:'absolute',
            top:'80px',
            left:'-200%',
            opacity:1,
            transition:'all 0.5 ease'
        }
    },
    lis:{
        color:'white',
        textDecoration:'none',
        padding:'10px',
        '&:hover':{
            backgroundColor:'#6d76f7',
            borderRadius:'4px'
        },
        [theme.breakpoints.down(780)]: {
            textAlign:'center',
            textDecoration:'none',
            '&:hover':{
                backgroundColor:'#6d76f7',
            },
            paddingTop:'25px',
            marginRight:'20px',
        }
    },
    lists:{
        color:'white',
        padding:'0.5rem 1rem',
        textDecoration:'none',
        [theme.breakpoints.down(780)]: {
            textAlign:'center',
            textDecoration:'none',
        }
    },
    logo:{
        position:'absolute',
        width:'40px',
        height:'40px',
        left:'50px',
    },
    logoimage:{
        width:'40px',
        height:'40px',
        borderRadius:"10px",
    },
    open:{
        color:'white',
        paddingLeft:'20px',
        paddingTop:'5px',
        display:'none',
        [theme.breakpoints.down(780)]: {
            display:'block',
        }
    },
    navmenuActive:{
        backgroundColor:' rgba(0, 0, 0,0.9)',
        color:'white',
        position:'absolute',
        top:'60px',
        left:'0px',
        textAlign:'center',
        width:'100%',
        opacity:'1',
        transition:'all 0.5 ease',
        zIndex:'1',
        height:'300px',
        display:'grid',
        padding:'10px',
        gridTemplateRows:'auto auto auto auto',
    },
    close:{
        color:'white',
        position:'absolute',
        left:'35px',
        transform:'translate(-50%,-50%)',
        cursor:'pointer',
    },
    auth:{
        position:'absolute',
        top:'8%',
        left:'94%',
        transform:'translate(-50%,-50%)',
        [theme.breakpoints.down(780)]: {
            top:'50%',
            left:'88%'
        },
        zIndex:'1'
    },
    down:{
        position:'fixed',
        top:'20',
        right:'0',
        width:'170px',
        height:'120px',
        padding:'10px',
    },
    notdown:{
        display:'none'
    },
    drops:{
        cursor:'pointer',
    },
}))