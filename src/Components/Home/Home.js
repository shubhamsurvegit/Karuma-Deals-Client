import {React} from 'react'
import { Paper,Grid } from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import tab1 from '../../tab1.jpg'
import tab2 from '../../tab2.webp'
import tab3 from '../../tab3.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const Home = ({bgimage}) => {
  const classes=useStyles();
  console.log(bgimage)
    return (
      <div className={classes.container}>
          <div className={classes.showcase}>
              <div className={classes.text}>
                  <h1>Welcome to KURUMA DEALS</h1>
                  <h2>Get Best Deals on every Purchase and Sell of Cars Only on KURUMA DEALS</h2>
              </div>
          </div>

          <div className={classes.tabs}>
              <Paper className={classes.tab}>
                <img className={classes.tabimg} alt="tab1 " src={tab1}></img>
                <p>Get Best deals for buying cars at affordable price and at par quality</p>
              </Paper>
              <Paper className={classes.tab}>
                <img className={classes.tabimg} alt="tab2" src={tab2}></img>
                <p>Predict price of the car you want to sell using advance machine learning</p>
              </Paper>
              <Paper className={classes.tab}>
                <img className={classes.tabimg} alt="tab3" src={tab3}></img>
                <p>List your car to sell here and get select the best deals</p>
              </Paper>
          </div>
          
          <footer className={classes.footer}>
            <div>
              <p>Links</p>
            <Grid container space={3} spacing={2} justify='flex-start' >
                    <Grid item className={classes.lis} > 
                        <Link className={classes.lists} to="/">Home</Link>
                    </Grid>
                    <Grid item className={classes.lis}>
                        <Link  className={classes.lists} to="/buy">Buy</Link>
                    </Grid>
                    <Grid item className={classes.lis}>
                        <Link className={classes.lists} to="/sell">Sell</Link>
                    </Grid>
                    <Grid item className={classes.lis}>
                        <Link className={classes.lists} to="/pricing">Predict Price</Link>
                    </Grid>
              </Grid>
              </div>
              <div>
                <p>Socials</p>
              <Grid container space={10} spacing={2} justify='center'>
                  <Grid item>
                    <FacebookIcon fontSize="large"></FacebookIcon>
                  </Grid>
                  <Grid item>
                    <TwitterIcon fontSize="large"></TwitterIcon>
                  </Grid>
                  <Grid item>
                    <LinkedInIcon fontSize="large"></LinkedInIcon>
                  </Grid>
                  <Grid item>
                    <InstagramIcon fontSize="large"></InstagramIcon>
                  </Grid>
              </Grid>
              </div>
          </footer>
      </div>
    )
}

export default Home
