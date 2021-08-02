import { Card, CardActionArea, Container, Grid,CardMedia ,Typography,CardContent,Button} from '@material-ui/core'
import React,{useState} from 'react'
import CarData from '../CarData/CarData'
import useStyles from './style'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRupeeSign } from '@fortawesome/free-solid-svg-icons'


const Cars = ({cars,len}) => {
    const [model,setModel]=useState('false')
    const [seller,setSeller]=useState();
    const classes=useStyles();
    const [msg,setMsg]=useState('');
    const [loggedIn,setLoggedIn]=useState(true);

    const showdetails=(seller,car)=>{
        seller.car_for_sale=car
        setSeller(seller)
        setModel(!model)
    }

    const handleClick=(seller,car)=>{
        const user=JSON.parse(localStorage.getItem('profile'))?.result
        if(typeof user==='undefined'){
            setLoggedIn(false)
        }
        else{
            const data={
                name:user.name,
                contact:user.phone,
                email:seller.email,
                brand:car.brand,
                model:car.model,
            }
            console.log(data)
            axios.post('http://localhost:5000/send-sms',data)
            .then((msg)=>{
                console.log("msg send")
                setMsg(car._id)
            })
            .catch((err)=>console.log(err))
        }
    }
    return (
        <div>
            <Container container>
                <Grid container alignItems="stretch" spacing={10} className={classes.maing} >
                    {cars && cars.map((seller)=>{
                        if(seller.seller_data[0].phone===JSON.parse(localStorage.getItem('profile'))?.result.phone){
                            return false;
                        }
                        return seller.cars_for_sale.map((car)=>{
                            return <Grid key={car._id} className={classes.showcase} >
                                <Card className={classes.showcase} onClick={()=>showdetails(seller.seller_data,car)} key={car._id}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={car.images[0].image1?car.images[0].image1:'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                                            title="Click to View"
                                        />
                                    </CardActionArea>
                                    <CardContent>
                                        
                                        <Typography gutterBottom variant="h5" component="h6">
                                            {car.year},{car.brand}, {car.model}
                                        </Typography>
                                        <Typography  gutterBottom variant="body2" color="textSecondary" component="p">
                                            {car.kms_driven} kms driven, {car.fuel_type}, {car.city}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        <FontAwesomeIcon icon={faRupeeSign} /> {car.selling_price}
                                        </Typography>
                                        <Typography variant="subtitle1" component="p">
                                            Seller Name : <b>{seller.seller_data[0].name}</b>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="p">
                                            Contact : <b>{seller.seller_data[0].phone}</b>
                                        </Typography>
                                        <Button onClick={()=>handleClick(seller.seller_data[0],car)} variant="contained" color="secondary">Intrested</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        })}  
                    )}
                </Grid>
            </Container>
            {model===true && <CarData msg={msg} showDetails={showdetails} seller={seller}/>}
            {!loggedIn &&
                <Dialog
                    open={true}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Make Sure You are Logged In before proceeding further!"}</DialogTitle>
                    <DialogActions>
                      <Button varinat="contained" href="/auth" color="primary">
                        Okay
                      </Button>
                    </DialogActions>
                </Dialog>
            }
            {!len && <p>Nothing matched your search filter!!!</p>}
        </div>
    )
}

export default Cars
