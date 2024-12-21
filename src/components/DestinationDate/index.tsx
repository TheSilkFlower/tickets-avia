import React from "react";
import styles from './index.module.scss'

interface DestinationDateProps {
    date: string
}

export const DestinationDate: React.FC<DestinationDateProps> = ({ date }) => {
    return (
        <div>{date}</div>
    )
}