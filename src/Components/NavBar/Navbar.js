import React,{useState,useEffect} from 'react'
import {Link,useHistory,useLocation} from 'react-router-dom'
const Navbar = () => {
    const location=useLocation();
    const history=useHistory();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile'))?.result.name);

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile'))?.result.name)
    },[location])
    
    const logout=()=>{
        setUser(null)
        localStorage.removeItem('profile')
        history.push('/')
    }
    return (
        <div>
            <h2>Navbar</h2>
            <div>
            <Link to="/">Home</Link>
            <Link to="/buy">Buy</Link>
            <Link to="/sell">Sell</Link>
            <Link to="/rent">Rent</Link>
            </div>
            <div>
                {user? 
                    (<div>
                        <p>Welcome {user}</p>
                        <button onClick={logout}>Logout</button>
                    </div>):
                    (<div>
                        <Link to="/auth">Login</Link>
                    </div>)
                } 
            </div>
        </div>
    )
}

export default Navbar
