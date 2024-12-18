import styles from './index.module.scss'
import React from 'react';
import Paper from '@mui/material/Paper';
import { TitleSection } from '../TitleSection';
import { CurrencyGroup } from '../CurrencyGroup';
import { CheckboxGroup } from '../TransferChoice';

export const OptionBlock: React.FC = () => {
    return (
        <div className={ styles.wrapper }>
           <Paper className={ styles.transfersBlock }>
                <TitleSection heading='Валюта'/>
                <CurrencyGroup />
                <TitleSection heading='Количество пересадок'/>
                <CheckboxGroup />
            </Paper> 
        </div>
    )
}