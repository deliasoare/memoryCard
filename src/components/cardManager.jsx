import { useState, useEffect } from 'react';
import Card from './Card';
export default function CardManager({data, level, gameOver, nextLevel}) {
    const [isClicked, setIsClicked] = useState(Array(level * 4).fill(0));
    
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(data);
    console.log(data);
    const onClickCard = (index) => {
        if (isClicked[index] === 1) {
            gameOver();
        }
        else {
            let draft = [...isClicked];
            draft[index] = 1;
            setIsClicked(draft);
        }
    }
    useEffect(() => {
        let filled = true;
        isClicked.forEach(card => {
            if (card === 0)
                filled = false;
        });
        if (filled === true) {
            nextLevel();
        }
    }, [isClicked]);

    useEffect(() => {
        setIsClicked(Array(level * 4).fill(0));
    }, [level])
    
    return (
        <div className='cardContainer'>
            {data ? data.map((card, index) => {
                return (
                    <Card onClickCard={onClickCard} id={card.myId} key={card.myId} info={card} />
                );
            })
            :
            <p>Wait.</p>
            }
        </div>
    );
}