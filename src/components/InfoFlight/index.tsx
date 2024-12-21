import React, { ReactNode } from "react";

interface InfoFlightProps {
    children: ReactNode
}

export const InfoFlight: React.FC<InfoFlightProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}