import React from "react";
import styles from './index.module.scss'

export const Loader: React.FC = () => {
    return (
            <img src='/loader.gif' className={ styles.loader }/>
    )
}