import React, { ReactNode } from "react";
import Paper from '@mui/material/Paper';
import styles from './index.module.scss'

interface InfoFlightProps {
    children: ReactNode
}

export const InfoFlight: React.FC<InfoFlightProps> = ({ children }) => {
    return (
        
           <Paper>
                <div className={ styles.wrapperInfoFlight }>
                    {children}
                </div>
            </Paper>
    )
}