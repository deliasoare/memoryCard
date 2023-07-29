import { useState } from 'react';
export default function Card({onClickCard, id, info}) {

    const setOffClick = () => {
        onClickCard(id);
    }
    return (
        <button onClick={setOffClick}>{info.title}</button>
    );
}