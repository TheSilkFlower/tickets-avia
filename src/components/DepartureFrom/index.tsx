import React from "react";

interface DepartureFromProps {
    airportCode: string,
    city: string
}

export const DepartureFrom: React.FC<DepartureFromProps> = ({ airportCode, city }) => {
    return (
        <div>
            {airportCode}, {city}
        </div>
    )
}