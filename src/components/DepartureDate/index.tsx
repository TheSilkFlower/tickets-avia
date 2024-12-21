import React from "react";
import styles from './index.module.scss'

interface DepartureDateProps {
    date: string
}

export const DepartureDate: React.FC<DepartureDateProps> = ({ date }) => {
    return (
        <div className={ styles.date }>{date}</div>
    )
}