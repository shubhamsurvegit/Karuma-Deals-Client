import Navbar from './Components/NavBar/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Sell from './Components/Sell/Sell'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import Buy from './Components/Buy/Buy'
import logo from './logo1.jpg'
import bgimage from './bgimage.webp'
import Predict from './Components/Predict/Predict'
import MyDeals from './Components/Mydeals/Mydeals'
function App() {
  return (
    <BrowserRouter>
      <Navbar logo={logo}/>
      <Switch>
        <Route exact path="/"><Home bgimage={bgimage}/></Route>
        <Route path="/auth"><Auth/></Route>
        <Route path="/sell"><Sell/></Route>
        <Route path="/buy"><Buy/></Route>
        <Route path="/pricing"><Predict/></Route>
        <Route path="/mydeals"><MyDeals/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
