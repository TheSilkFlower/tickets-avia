import React from "react";
import styles from './index.module.scss';

interface TicketCostInfo {
    cost: number
} 

export const TicketCost: React.FC<TicketCostInfo> = ( { cost } ) => {
    
    return (
        <div className={ styles.info }>
            <button className={ styles.buttonBuy }>Купить за {cost}</button>
        </div>
    )
}