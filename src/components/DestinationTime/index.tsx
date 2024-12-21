import React from "react";
import styles from './index.module.scss'

interface DestinationTimeProps {
    time: string
}

export const DestinationTime: React.FC<DestinationTimeProps> = ({ time }) => {
    return (
        <div>{time}</div>
    )
}