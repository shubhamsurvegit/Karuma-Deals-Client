import { Card, CardActionArea, Container, Grid,CardMedia ,Typography,CardContent,Button} from '@material-ui/core'
import React,{useState} from 'react'
import CarData from '../CarData/CarData'
import useStyles from './style'
import axios from 'axios'

const Cars = ({cars}) => {
    const [model,setModel]=useState('false')
    const [seller,setSeller]=useState();
    const classes=useStyles();
    const [msg,setMsg]=useState('');
    const showdetails=(seller,car)=>{
        seller.car_for_sale=car
        setSeller(seller)
        setModel(!model)
    }

    const handleClick=(car)=>{
        const user=JSON.parse(localStorage.getItem('profile'))?.result
        if(typeof user==='undefined'){
            console.log("KINDLY LOGIN")
        }
        else{
            const data={
                user:user,
                car:car
            }
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
        <Container>
            <Grid container alignItems="stretch" spacing={10}>
                {cars && cars.map((seller)=>
                    {return seller.cars_for_sale.map((car)=>(
                        <Grid item key={car._id} >
                            <Card onClick={()=>showdetails(seller.seller_data,car)} key={car._id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={car.images[0].image1?car.images[0].image1:'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                                        title="Click to View"
                                    />
                                </CardActionArea>
                                <CardContent>
                                    
                                    <Typography gutterBottom variant="h5" component="h6">
                                        {car.year},{car.brand} {car.model}
                                    </Typography>
                                    <Typography  gutterBottom variant="body2" color="textSecondary" component="p">
                                        {car.ownership} Owner, {car.selling_price}, {car.city}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Rs {car.selling_price}
                                    </Typography>
                                    <Typography variant="h6" component="h6">
                                        Seller Name : {seller.seller_data.name}
                                    </Typography>
                                    <Typography variant="h6" component="h6">
                                        Contact : {car.contact}
                                    </Typography>
                                    <Button onClick={()=>handleClick(car)} variant="contained" color="secondary">Intrested</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}  
                )}
            </Grid>
        </Container>
        {model===true && <CarData msg={msg} showDetails={showdetails} seller={seller}/>}
        </div>
    )
}

export default Cars
