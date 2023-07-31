import { useState, useEffect } from 'react';
import CardManager from './CardManager.jsx';
export default function CardContainer({data}) {
    const [level, setLevel] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentData, setCurrentData] = useState([]);

    const incrementCurrentScore = () => {
        setCurrentScore(currentScore + 1);
        console.log(currentScore);
    }
    const gameOver = () => {
        setLevel(1);
        setCurrentScore(0);
    }

    const nextLevel = () => {
        if (level !== 5)
            setLevel(level + 1);
        else
            console.log('Winning condition');
    }

    useEffect(() => {
        if (currentScore > highScore)
            setHighScore(currentScore);
    }, [currentScore]);

    useEffect(() => {
        let newData = [];
        let index = 0;
        for (let i = 0; i < level * 4; i++) {
            newData[index] = data[i];
            if (data[i])
                newData[index].myId = index;
            index++;
        }
        setCurrentData(newData);
    }, [level, data])

    return (
        <div className='main'>
            <div className='stats'>
                <p className='currentLevel'>Level {level}</p>
                <p className='currentScore'>Current score: {currentScore}</p>
                <p className='highScore'>High score: {highScore}</p>
            </div>
            <CardManager data={currentData[0] !== undefined && currentData} level={level} gameOver={gameOver} nextLevel={nextLevel} incrementCurrentScore={incrementCurrentScore}/>
        </div>
    );
}