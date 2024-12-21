import React, { ReactNode } from "react";
import Paper from '@mui/material/Paper';

interface InfoAirlinesProps {
    children: ReactNode
}

export const InfoAirlines: React.FC<InfoAirlinesProps> = ({ children }) => {
    return (
        <Paper>
            {children}
        </Paper>
    )
}