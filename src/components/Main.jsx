import { useState, useEffect } from 'react';

import CardContainer from './CardContainer';
export default function Main() {
    const [data, setData] = useState([]);

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f1f5ff0bfmsh064ede758dd9f21p155700jsn4613acdf8863',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const fetchInfo = () => {
        fetch(url, options)
        .then(res => res.json())
        .then((d) => setData(d));
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const onChangeLevel = (value) => {
        setLevel(value)
    }
    return (
        <>
            <CardContainer data={data}/>
        </>
    );
}