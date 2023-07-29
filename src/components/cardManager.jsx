import { useState, useEffect } from 'react';
import Card from './Card';
export default function CardManager({data, level}) {
    const [isClicked, setIsClicked] = useState(Array(level * 5).fill(0));
    
    const onClickCard = (index) => {
        if (isClicked[index] === 1)
            console.log('lost');
        else {
            let draft = [...isClicked];
            draft[index] = 1;
            setIsClicked(draft);
        }
    }
    useEffect(() => {
        let filled = true;
        isClicked.forEach(card => {
            console.log(card);
            if (card === 0)
                filled = false;
        });
        if (filled === true)
            console.log('next level');
    }, [isClicked]);

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