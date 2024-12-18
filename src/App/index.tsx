import React from "react";
import styles from './index.module.scss';
import { OptionBlock } from "../components/OptionBlock";
import { Ticket } from "../components/Ticket";

export const App: React.FC = () => {
    return (
        <main>
            <OptionBlock />
            <Ticket />
        </main>
    )
}