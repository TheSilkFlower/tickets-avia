import styles from './index.module.scss';
import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';

interface Ticket {
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

interface TicketChildrenProps {
    children: ReactNode
}

export const Ticket: React.FC<TicketChildrenProps> = ({ children }) => {
    return (
            <Paper sx={{ padding: '16px' }}>
                {children}
            </Paper> 
    )
}