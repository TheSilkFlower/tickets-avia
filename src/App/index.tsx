import React, { useCallback, useMemo } from "react";
import styles from './index.module.scss';
import { ticketsCollection } from '../components/TicketsCollection';
import { OptionBlock } from "../components/OptionBlock";
import { Ticket } from "../components/Ticket";
import { TicketCost } from "../components/TicketCost";
import { InfoAirlines } from "../components/InfoAirlines";
import { InfoFlight } from "../components/InfoFlight";
import { TicketCarrier } from "../components/TicketCarrier";
import { DepartureFrom } from "../components/DepartureFrom";
import { DestinationTo } from "../components/DestinationTo";
import { DepartureTime } from "../components/DepartureTime";
import { DepartureDate } from "../components/DepartureDate";
import { DestinationTime } from "../components/DestinationTime";
import { DestinationDate } from "../components/DestinationDate";
import { Stop } from "../components/Stop";
import { convertDate } from "../helpers";
import { useAppSelector } from "../hooks/state";

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

    // создаём копию массива ticketsCollection и сортируем по стоимости
    const sortedTickets = useMemo(() => {
        const newTicketsCollection = [...ticketsCollection].sort((a: Ticket, b: Ticket) => a.priceRub - b.priceRub)
        return newTicketsCollection
    }, []) 

    // подписываемся на изменение curr из store
    const activeCurr = useAppSelector(state => state.currency.curr);
    
    return (
        <main>
            <OptionBlock /> 
            <section className={ styles.wrapperSection }>
            {sortedTickets.map(ticket => {
                
                // определяем валюту
                let actualCost;
                switch(activeCurr) {
                    case 'RUB':
                        actualCost = ticket.priceRub;
                        break;
                    case 'EUR':
                        actualCost = ticket.priceEur;
                        break;
                    case 'USD':
                        actualCost = ticket.priceUsd;
                        break;
                    default: actualCost = ticket.priceRub;
                }

                return <Ticket key={ticket.priceRub}>
                            <InfoAirlines>
                                <div key={ticket.priceRub} className={ styles.wrapperTicketAirlines }>
                                    <div className={ styles.wrapperInfoAirlines }>
                                       <TicketCarrier src={getImage(ticket.carrier)}/>
                                       <TicketCost cost={actualCost}/> 
                                    </div>
                                </div>
                            </InfoAirlines>
                            <InfoFlight>
                                <div className={ styles.wrapperDepartureFrom }>
                                    <DepartureTime time={ticket.departure_time}/>
                                    <DepartureFrom airportCode={ticket.origin} city={ticket.origin_name}/>
                                    <DepartureDate date={convertDate(ticket.departure_date)}/>
                                </div>
                                <Stop stop={getStops(ticket.stops)}/>
                                <div className={ styles.wrapperDestinationTo }>
                                    <DestinationTime time={ticket.arrival_time}/>
                                    <DestinationTo airportCode={ticket.destination} city={ticket.destination_name}/>
                                    <DestinationDate date={convertDate(ticket.arrival_date)}/>
                                </div>
                            </InfoFlight>
                       </Ticket>
                    })}
            </section>
        </main>
    )
}