import React from "react";
import styles from './index.module.scss'

interface DepartureTimeProps {
    time: string
}

export const DepartureTime: React.FC<DepartureTimeProps> = ({ time }) => {
    return (
        <div>{time}</div>
    )
}