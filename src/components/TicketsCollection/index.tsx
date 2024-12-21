import info from '../../tickets.json';
import { Tickets } from '../Ticket';

export const ticketsCollection: Tickets = []

for(let ticket of info['tickets']) {
    ticketsCollection.push(ticket)
}

console.log(ticketsCollection)