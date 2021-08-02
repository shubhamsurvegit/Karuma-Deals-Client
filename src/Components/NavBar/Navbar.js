import React,{useState,useEffect} from 'react'
import {Link,useHistory,useLocation} from 'react-router-dom'
import { Button,Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles'
import decode from 'jwt-decode'

const Navbar = ({logo}) => {
    const classes=useStyles();
    const location=useLocation();
    const history=useHistory();
    const [dropdown,setDropdown]=useState(false)
    const [icon,setIcon]=useState(false);
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile'))?.result.name);

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('profile'));
        if(user?.token){
            const decodedtoken=decode(user.token)   
            if(decodedtoken.exp*1000<new Date().getTime()){
                logout()
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile'))?.result.name)
    },[location])
    
    const logout=()=>{
        setUser(null)
        localStorage.removeItem('profile')
        history.push('/')
    }
    return (
        <div className={classes.nav}>
                <div className={classes.logo}>
                    <img className={classes.logoimage} alt="logo" src={logo}></img>
                </div>
                
                <div className="menuicon" onClick={()=>setIcon(!icon)}>
                    {!icon?<MenuIcon className={classes.open}></MenuIcon>:<CloseIcon className={classes.close}></CloseIcon>}
                </div>
                <ul onClick={()=>setIcon(false)} className={icon?classes.navmenuActive:classes.navmenu}>
                    <li className={classes.lis} > 
                        <Link className={classes.lists} to="/">Home</Link>
                    </li>
                    <li className={classes.lis}>
                        <Link  className={classes.lists} to="/buy">Buy</Link>
                    </li>
                    <li className={classes.lis}>
                        <Link className={classes.lists} to="/sell">Sell</Link>
                    </li>
                    <li className={classes.lis}>
                        <Link className={classes.lists} to="/pricing">Predict Price</Link>
                    </li>
                </ul>
               
                {user? 
                    (
                        <div className={classes.auth}>
                            
                            <Avatar onClick={()=>setDropdown(!dropdown)}>{user.charAt(0)}</Avatar>
                            
                            <Paper onClick={()=>setDropdown(!dropdown)} className={dropdown?classes.down:classes.notdown}>
                                <p className={classes.drops}>Signed in as <b>{user}</b></p>
                                <p className={classes.drops}><Link style={{color:'black',textDecoration:'none'}} to="/mydeals">My Deals</Link></p>
                                <Button onClick={logout}  variant="contained" size="small" color="secondary">Logout</Button> 
                            </Paper>
                        </div>
                    ):
                    (<div className={classes.auth} >
                        <Button variant="contained" size="small" color="primary"><Link style={{color:'white',textDecoration:'none'}}to="/auth">Login</Link></Button>
                    </div>)
                    } 
        </div>
    )
}

export default Navbar
