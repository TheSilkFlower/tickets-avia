import React from "react";
import styles from './index.module.scss'

interface DestinationToProps {
    airportCode: string,
    city: string
}

export const DestinationTo: React.FC<DestinationToProps> = ({ airportCode, city }) => {
    return (
        <div className={ styles.destinationTo }>
            {city}, <span className={ styles.airportCode }>{airportCode}</span>
        </div>
    )
}