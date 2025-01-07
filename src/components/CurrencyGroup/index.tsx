import styles from './index.module.scss';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

const CustomButton = styled(Button)(() => ({
            backgroundColor: '#fafcff',
            color: '#5ca9fa',
            border: ' 1px solid #c2c2c2',
            boxSizing: 'border-box',
            width: '80px',
        '&:hover': {
            backgroundColor: '#f2f8ff',
            color: '#5ca9fa',
            borderColor: '#5ca9fa',
            boxShadow: 'none',
        },
        '&.active': {
            backgroundColor: '#5ca9fa',
            color: 'aliceblue',
            borderColor: '#5ca9fa',
        },
}))

interface Currency {
    onSelected?: (curr: string) => void
}

export const CurrencyGroup: React.FC<Currency> = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('RUB')
    const currency: string = useSelector((state: RootState) => state.currency.value)

    function handleSelect(curr: string) {
        setSelectedCurrency(curr)
    }
    
    return (
        <div className={ styles.wrapperButtons }>
            <CustomButton 
                onClick={() => handleSelect('RUB')}
                onSelect={() => selectedCurrency === 'RUB'}
                className={selectedCurrency === 'RUB' ? 'active' : '' }
                sx={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}
            >RUB</CustomButton>
            <CustomButton 
                onClick={() => handleSelect('USD')}
                onSelect={() => selectedCurrency === 'USD'}
                className={selectedCurrency === 'USD' ? 'active' : '' }
                sx={{ borderLeft: '0px', borderRight: '0px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
            >USD</CustomButton>
            <CustomButton 
                onClick={() => handleSelect('EUR')}
                onSelect={() => selectedCurrency === 'EUR'}
                className={selectedCurrency === 'EUR' ? 'active' : '' }
                sx={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
            >EUR</CustomButton>
        </div>
    )
}