import { useState, useRef } from 'react';

import Card from '../assets/card.svg';
export default function Header() {
    const [openHelp, setOpenHelp] = useState(false);
    const helpButtonRef = useRef(null);
    const helpContainerRef = useRef(null);
    const onOpenHelp = () => {
        helpButtonRef.current.classList.add('clicked');
        setOpenHelp(true);
    }
    const onCloseHelp = () => {
        helpButtonRef.current.classList.remove('clicked');
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
                    <button onClick={onOpenHelp} ref={helpButtonRef} className='helpButton'>Help</button>
                </div>
            </div>
            {openHelp && 
                <div className='helpContainer' ref={helpContainerRef} onClick={(e) => { if (e.target === helpContainerRef.current) onCloseHelp() }}>
                    <div className='helpModal'>
                        <div className='closeHelpModal' onClick={onCloseHelp}>X</div>
                        <div className='modalContent'>
                            <p><b>WAY OF PLAYING:</b> Select each card only once in order to reach the next level.</p>
                            <p><b>LOSING:</b> You only lose if you select the same card twice; In that case, you are taken back to level 1.</p>
                            <p><b>HOW:</b> In order to select a card, simply click on it.</p>
                            <p><b>OBJECTIVE:</b> Complete 5 levels.</p>
                        </div>
                    </div>
                </div>
            }
        </>
        
    );
}