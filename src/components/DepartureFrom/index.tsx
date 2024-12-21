import React from "react";
import styles from './index.module.scss'

interface DepartureFromProps {
    airportCode: string,
    city: string
}

export const DepartureFrom: React.FC<DepartureFromProps> = ({ airportCode, city }) => {
    return (
        <div>
            <span className={ styles.airportCode }>{airportCode}</span>, {city}
        </div>
    )
}