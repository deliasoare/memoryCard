import { useState, useEffect } from 'react';
import CardManager from './CardManager.jsx';
export default function CardContainer({onChangeLevel, data, level}) {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentData, setCurrentData] = useState([]);

    const gameOver = () => {
        onChangeLevel(1);
        setCurrentScore(0);
    }

    const nextLevel = () => {
        onChangeLevel(level + 1)
    }

    useEffect(() => {
        let newData = [];
        for (let i = (level - 1) * 5; i < (level - 1) * 5 + level * 5; i++) {
            newData[i] = data[i];
        }
        setCurrentData(newData);
    }, [level, data])

    return (
        <div className='container'>
            <div className='stats'>
                <p className='currentLevel'>Level {level}</p>
                <p className='currentScore'>Current score: {currentScore}</p>
                <p className='highScore'>High score: {highScore}</p>
            </div>
            <CardManager data={currentData[0] !== undefined && currentData} level={level}/>
        </div>
    );
}