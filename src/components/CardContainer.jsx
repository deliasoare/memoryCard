import { useState, useEffect } from 'react';
export default function CardContainer({data, level}) {
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        let nrData = level * 5;
        let newData =[];
        for (let i = 0; i < nrData; i++)
            newData.push(data[i]);
        setCurrentData(newData);
    }, [level, data])

    console.log(currentData);

}