import React from "react";
import styles from './index.module.scss'


interface TicketPriceInfo {
    price: number,
    img: string
} 

export const InfoAirlines: React.FC<TicketPriceInfo> = ( {price, img} ) => {
    
    return (
        <>
            <img src={img}/>
            <button className={ styles.buttonBuy }>Купить за {price}</button>
        </>
    )
}