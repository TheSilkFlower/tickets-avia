import React, { useCallback } from "react";
import styles from './index.module.scss';
import { ticketsCollection } from '../components/TicketsCollection';
import { OptionBlock } from "../components/OptionBlock";
import { Ticket } from "../components/Ticket";
import { TicketCost } from "../components/TicketCost";
import { InfoFlight } from "../components/InfoFlight";
import { TicketCarrier } from "../components/TicketCarrier";
import { DepartureFrom } from "../components/DepartureFrom";
import { DestinationTo } from "../components/DestinationTo";
import { DepartureTime } from "../components/DepartureTime";
import { DepartureDate } from "../components/DepartureDate";
import { DestinationTime } from "../components/DestinationTime";
import { DestinationDate } from "../components/DestinationDate";
import { Stops } from "../components/Stops";

export const App: React.FC = () => {
    //получаем изображение авиакомпании
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
                src = '/s7.jpg';
                break;
            case 'BA':
                src = '/british.png';
                break;
        }
        return src
    }, [])

    // получаем количество пересадок
    const getStops = useCallback((value: number) => {
        let stop = ''
        switch(value) {
            case 0:
                stop = 'Без пересадок';
                break;
            case 1:
                stop = '1 пересадка';
                break;
            case 2:
                stop = '2 пересадки';
                break;
            case 3:
                stop = '3 пересадки';
                break;
            }
        return stop
    }, [])

    return (
        <main>
            <OptionBlock /> 
            <section className={ styles.wrapperSection }>
                { ticketsCollection.map(ticket => {
                    return <Ticket key={ticket.price}>
                                <div key={ticket.price} className={ styles.wrapperTicket }>
                                    <div className={ styles.wrapperInfoAirlines }>
                                       <TicketCarrier src={getImage(ticket.carrier)}/>
                                       <TicketCost cost={ticket.price}/> 
                                    </div>
                                    <InfoFlight>
                                        <div className={ styles.wrapperDepartureFrom }>
                                            <DepartureTime time={ticket.departure_time}/>
                                            <DepartureFrom airportCode={ticket.origin} city={ticket.origin_name}/>
                                            <DepartureDate date={ticket.departure_date}/>
                                        </div>
                                        <Stops stop={getStops(ticket.stops)}/>
                                        <div className={ styles.wrapperDestinationTo }>
                                            <DestinationTime time={ticket.arrival_time}/>
                                            <DestinationTo airportCode={ticket.destination} city={ticket.destination_name}/>
                                            <DestinationDate date={ticket.arrival_date}/>
                                        </div>
                                    </InfoFlight>
                                </div>
                            </Ticket>
                })}
            </section>
        </main>
    )
}