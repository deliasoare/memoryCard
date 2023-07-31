import { useState } from 'react';
export default function Card({onClickCard, id, info}) {

    const setOffClick = () => {
        onClickCard(id);
    }
    return (
        <a className="card" onClick={setOffClick}>
            <img className="cardThumbnail" src={info.thumbnail} />
            <p className="cardTitle">{info.title}</p>
        </a>
    );
}