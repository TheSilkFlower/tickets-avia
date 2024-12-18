import styles from './index.module.scss';
import React, { useCallback } from 'react';
import Paper from '@mui/material/Paper';
import { InfoAirlines } from '../InfoAirlines';
import { InfoFlight } from '../InfoFlight';
import info from '../../tickets.json';

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

type Tickets = Ticket[] 
const ticketsCollection: Tickets = []

for(let ticket of info['tickets']) {
    ticketsCollection.push(ticket)
}
console.log(ticketsCollection)


export const Ticket: React.FC<Ticket> = () => {
    const getImage = useCallback((carrier: string) => {
        let src =''
        switch(carrier) {
            case 'SU':
                src = '/rus.png';
                break;
            case 'TK':
                src = '/turkish.jpg';
                break;
            case 'S7':
                src = '/s7.png';
                break;
            case 'BA':
                src = '/british.png';
                break;
        }
        return src
    }, [])
    return (
        <Paper sx={{ padding: '16px' }}>
            {ticketsCollection.map(ticket => (
                <div key={ticket.price}>
                    <InfoAirlines price={ticket.price} img={getImage(ticket.carrier)}/>
                    <InfoFlight />
                </div>
            ))}    
        </Paper> 
    )
}