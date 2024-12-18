import React from 'react'
import styles from './index.module.scss'

interface Title {
    heading: string
}

export const TitleSection: React.FC<Title> = ({ heading }) => {
    return (
        <h3>{heading}</h3>
    )
}