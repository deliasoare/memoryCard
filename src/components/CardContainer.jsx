import { useState, useEffect } from 'react';
import CardManager from './CardManager';

export default function CardContainer({data}) {
    const [level, setLevel] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentData, setCurrentData] = useState([]);
    const [wonGame, setWonGame] = useState(false);

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
            setWonGame(true);
    }

    const restartGame = () => {
        gameOver();
        setWonGame(false);
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
        <>
        <div className='main'>
            <div className='stats'>
                <p className='currentScore'>Current score: {currentScore}</p>
                <p className='highScore'>High score: {highScore}</p>
            </div>
            <div className='mainContainer'>
                <p className='currentLevel'>Level {level}</p>
                <CardManager data={currentData[0] !== undefined && currentData} level={level} gameOver={gameOver} nextLevel={nextLevel} incrementCurrentScore={incrementCurrentScore}/>
            </div>
        </div>
        {wonGame &&
            <div className='wonGameContainer'>
                <div className='wonGameModal'>
                    <div className='modalContent wonGameContent'>
                        <div className="congratulatoryMsg">
                            <p className='bold'>YOU WON!</p>
                            <p>Wow, that's impressive!</p>
                        </div>
                        <div>
                            <p>Would you like to try again?</p>
                            <button onClick={restartGame} className='restartGame'>Restart</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}