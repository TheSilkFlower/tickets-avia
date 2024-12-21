import React from "react";

interface DestinationToProps {
    airportCode: string,
    city: string
}

export const DestinationTo: React.FC<DestinationToProps> = ({ airportCode, city }) => {
    return (
        <div>
            {city}, {airportCode}
        </div>
    )
}