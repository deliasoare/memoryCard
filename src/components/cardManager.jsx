import { useState, useEffect } from 'react';
import Card from './Card';
export default function CardManager({data, level, gameOver, nextLevel}) {
    const [isClicked, setIsClicked] = useState(Array(level * 5).fill(0));
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
        setIsClicked(Array(level * 5).fill(0));
    }, [level])
    return (
        <div className='cardContainer'>
            {data ? data.map((card, index) => {
                return (
                    <Card onClickCard={onClickCard} id={index} key={index} info={card} />
                );
            })
            :
            <p>Wait.</p>
            }
        </div>
    );
}