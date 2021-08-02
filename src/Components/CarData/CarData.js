import React,{useState} from 'react'
import useStyles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import { Button,Typography } from '@material-ui/core';



const CarData = ({showDetails,seller,msg}) => {
    const classes=useStyles();
    const images=seller.car_for_sale.images[0];
    const image_arr=Object.keys(images).map((image)=>images[image])
    const [currImage,setCurrImage]=useState(0);

    return (
        <div className={classes.view}>
            <div className={classes.container}>
                <div className={classes.corousel} style={{backgroundImage:`url(${image_arr[currImage]})`}}>
                    <div onClick={()=>currImage>0 && setCurrImage(currImage-1)}className={classes.left}>
                        <ArrowBackIosIcon/>
                    </div>
                    <div onClick={()=>currImage<4 && setCurrImage(currImage+1)} className={classes.right}>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
                {msg===seller.car_for_sale._id && <Typography className={classes.msg} variant="h5" component="h6">Message has been sent to seller via email</Typography>}
                <Button size="small" className={classes.close} onClick={showDetails}><CloseIcon/></Button>
            </div>
        </div>
    )
}

export default CarData
