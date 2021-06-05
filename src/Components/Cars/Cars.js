import { Card, CardActionArea, Container, Grid,CardMedia ,Typography,CardContent,Paper} from '@material-ui/core'
import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import CarData from '../CarData/CarData'
import useStyles from './style'

const Cars = () => {
    const cars=useSelector((state)=>state.sell.cars)
    const [model,setModel]=useState('false')
    const [seller,setSeller]=useState();
    const classes=useStyles();
    const showdetails=(seller,car)=>{
        seller.car_for_sale=car
        setSeller(seller)
        setModel(!model)
    }
    return (
        <div>
        <Container>
            <p>Cars</p>
            <Grid container>
                {cars && cars.map((seller)=>
                    <div >
                        {seller.cars_for_sale.map((car)=>(
                            <Card onClick={()=>showdetails(seller.seller_data,car)} key={seller._id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={car.images[0].image1}
                                        title="Click to View"
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h10">
                                        {car.year},{car.brand} {car.model}
                                    </Typography>
                                    <Typography  gutterBottom variant="body2" color="textSecondary" component="p">
                                        {car.ownership} Owner, {car.price}, {car.city}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Rs {car.price}
                                    </Typography>
                                    <Typography variant="h7" component="h6">
                                        Seller Name : {seller.seller_data.name}
                                    </Typography>
                                    <Typography variant="h7" component="h6">
                                        Contact : {car.contact}
                                    </Typography>
                                </CardContent>
                            </Card> 
                        ))}  
                    </div>
                )}
            </Grid>
        </Container>
        {model==true && <CarData showDetails={showdetails} seller={seller}/>}
        </div>
    )
}

export default Cars
