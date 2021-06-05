import React,{useState} from 'react'
import useStyles from './styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const CarData = ({showDetails,seller}) => {
    const classes=useStyles();
    console.log(seller)
    const images=seller.car_for_sale.images[0];
    const image_arr=Object.keys(images).map((image)=>images[image])
    const [currImage,setCurrImage]=useState(0);
    return (
        <div className={classes.view}>
            <div className={classes.container}>
                <div className={classes.corousel} style={{backgroundImage:`url(${image_arr[0]})`}}>
                    
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    
                </div>
                <p>{seller.name}</p>
                <button onClick={showDetails}>Close</button>s
            </div>
        </div>
    )
}

export default CarData
