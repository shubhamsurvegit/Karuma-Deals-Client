import React, { useEffect,useState } from 'react'
import { Grid,Container,Button } from '@material-ui/core';
import useStyles from './styles'
import {useDispatch,useSelector} from 'react-redux'
import { mydeals, soldcar,removedeal } from '../../actions/action';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const Mydeals = () => {
    const dispatch=useDispatch();
    const classes=useStyles();
    const [popup,setPopup]=useState('')
    const deals=useSelector((state)=>state?.mydeals?.result)
    useEffect(()=>{
        dispatch(mydeals()) 
    },[dispatch])

    const handleSold=(id)=>{
        dispatch(soldcar(id))
        setPopup('soldcar')
    }

    const handleRemove=(id)=>{
        dispatch(removedeal(id))
        setPopup('removedeal')
    }

    return (
        <Container maxWidth="xl" container className={classes.container}>
            <Grid container direction="row" spacing={10}  className={classes.grid}>
                {deals && deals.cars_for_sale.map(car=>{
                    return <Grid item key={car._id} className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <img style={{width:'150px',height:'150px'}} src={car.images[0].image1}></img>
                            </Grid>
                            <Grid item>
                                <p>Brand <b>{car.brand}</b></p>
                                <p>Model <b>{car.model}</b></p>   
                                <p>City <b>{car.city}</b></p>
                                <p>Selling Price <b>{car.selling_price}</b></p>
                                <p>Fuel Type <b>{car.fuel_type}</b></p>
                                <p><b> {car.status?'Car is Sold. ':'Waiting For Buyers...'}</b></p>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        {!car.status && <Button onClick={()=>handleSold(car._id)} color="primary" variant="contained">Cars Sold</Button>}
                                    </Grid>
                                    <Grid item>
                                        {!car.status && <Button onClick={()=>handleRemove(car._id)} color="secondary" variant="contained">Remove Deal</Button>}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                })
                }
            </Grid>       
            {popup && <Dialog
                  open={true}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{popup==='soldcar'?
                "Congratulations! For more deals visit KURUMA Deals again"
                :
                "Deal Removed! We hope you visit KURUMA Deals again"}
                </DialogTitle>
                <DialogActions>
                  <Button varinat="contained" onClick={()=>setPopup(false)} color="primary">
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            }
            {deals && deals?.cars_for_sale.length===0 && <p className={classes.msg}>NO Deals Yet!!</p>}
        </Container>
    )
}

export default Mydeals