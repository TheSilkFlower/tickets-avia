import React from "react";
import styles from './index.module.scss'

interface StopProps {
    stop: string
}

export const Stop: React.FC<StopProps> = ({ stop }) => {
    return (
        <div className={ styles.stop }>
            {stop}
        </div>
    )
}