import { useState, useEffect } from 'react';
import CardManager from './cardManager'
export default function CardContainer({onChangeLevel, data, level}) {
    const [currentData, setCurrentData] = useState([]);
    useEffect(() => {
        let nrData = level * 5;
        let newData = [];
        for (let i = 0; i < nrData; i++) {
            newData[i] = data[i];
        }
        setCurrentData(newData);
    }, [level, data])

    return (
        <CardManager data={currentData[0] !== undefined && currentData} level={level}/>
    );
}