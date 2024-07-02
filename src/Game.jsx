import './App.css';
import Tower from './Tower';

export default function Game() {
    return (
        <main>
            <div className='game'>
                <Tower />
                <Tower />
                <Tower />
            </div>
        </main>
    );
}
