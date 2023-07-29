import Card from '../assets/card.svg';
export default function Header() {
    return (
        <div className='header'>
            <div className='title'>
                <img className='logo' src={Card}></img>
                <div className='name'>Game Memory</div>
            </div>
            <div className='helpButtonContainer'>
                <button className='helpButton'>Help</button>
            </div>
        </div>
    );
}