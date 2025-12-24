import React from "react";
import styles from './index.module.scss';
import { useAppSelector } from "../../hooks/state";

interface TicketCostInfo {
    cost: number
} 

export const TicketCost: React.FC<TicketCostInfo> = ( { cost } ) => {
    const curr = useAppSelector(state => state.currency.curr);
    let currType;
    switch(curr) {
        case 'RUB':
            currType = '₽';
            break;
        case 'EUR':
            currType = '€';
            break;
        case 'USD':
            currType = '$';
            break;
        default: currType = '₽';
    }
    
    return (
        <div className={ styles.info }>
            <button className={ styles.buttonBuy }>Купить за {cost} {currType}</button>
        </div>
    )
}