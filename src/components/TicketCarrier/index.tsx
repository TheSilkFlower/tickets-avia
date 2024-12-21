import React from "react";
import styles from './index.module.scss'

interface TicketCarrierProps {
    src: string
}

export const TicketCarrier: React.FC<TicketCarrierProps> = ({ src }) => {
    return (
            <div className={ styles.wrapperImg }>
                <img src={src} />
            </div>
    )
}