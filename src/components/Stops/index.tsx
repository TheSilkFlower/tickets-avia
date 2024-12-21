import React from "react";
import styles from './index.module.scss'

interface StopsProps {
    stop: string
}

export const Stops: React.FC<StopsProps> = ({ stop }) => {
    return (
        <div>
            {stop}
        </div>
    )
}