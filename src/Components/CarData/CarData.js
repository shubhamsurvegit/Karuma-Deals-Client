import React from 'react'
import useStyles from './styles'

const CarData = ({showDetails,seller}) => {
    const classes=useStyles();
    console.log(seller)
    return (
        <div className={classes.view}>
            <div className={classes.container}>
                
                <p>model</p>
                <p>{seller.name}</p>
                <button onClick={showDetails}>Close</button>
            </div>
        </div>
    )
}

export default CarData
