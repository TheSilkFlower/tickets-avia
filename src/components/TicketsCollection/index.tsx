import info from '../../tickets.json';
import { Tickets } from '../Ticket';

export const ticketsCollection: Tickets = []

for(const ticket of info['tickets']) {
    ticketsCollection.push(ticket)
}