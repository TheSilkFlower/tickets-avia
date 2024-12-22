import styles from './index.module.scss';
import React, { ReactNode } from 'react';

export interface Ticket {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}

export type Tickets = Ticket[]

interface TicketProps {
    children: ReactNode
}

export const Ticket: React.FC<TicketProps> = ({ children }) => {
    return (
                <div className={ styles.wrapperTicket }>
                   {children} 
                </div>
    )
}