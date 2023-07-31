import { useState, useEffect } from 'react';

import Card from '../assets/card.svg';
export default function Header() {
    const [openHelp, setOpenHelp] = useState(false);

    const onOpenHelp = () => {
        setOpenHelp(true);
    }
    const onCloseHelp = () => {
        setOpenHelp(false);
    }
    return (
        <>
            <div className='header'>
                <div className='title'>
                    <img className='logo' src={Card}></img>
                    <div className='name'>Game Memory</div>
                </div>
                <div className='helpButtonContainer'>
                    <button onClick={onOpenHelp} className='helpButton'>Help</button>
                </div>
            </div>
            {openHelp && 
                <div className='helpContainer'>
                    <div className='helpModal'>
                        
                    </div>
                </div>
            }
        </>
        
    );
}