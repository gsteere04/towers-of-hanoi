import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Tower from './Tower';
import { disc as initialDiscs } from '../assets/disc';

export default function Game() {
    const [parent, setParent] = useState(null);
    const [moves, setMoves] = useState(0);
    const [towerState, setTowerState] = useState({
        t1: [...initialDiscs],
        t2: [],
        t3: [],
    });

    useEffect(() => {
        if (towerState.t3.length === initialDiscs.length) {
            tellUserTheyWon();
        }
    }, [towerState]);

    const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };

    const message = "Now why would you organize the disc like that?";
    const screamAtUser = () => toast.error(message, toastConfig);
    const winMessage = `You won! It only took you...${moves} moves? Hmm...`;
    const tellUserTheyWon = () => toast.success(winMessage, toastConfig);

    function handleDragEnd({ active, over }) {
        if (!over) return;

        setParent(over.id);

        const discId = active.id;
        const sourceTowerId = active.data.current.sortable.containerId;
        const targetTowerId = over.id;

        const sourceTower = towerState[sourceTowerId];
        const targetTower = towerState[targetTowerId];

        // Check if the move is valid
        if (targetTower.length > 0 && discId > targetTower[targetTower.length - 1].id) {
            screamAtUser();
            return;
        }

        // Move the disc
        const discToMove = sourceTower.find(d => d.id === discId);
        const updatedSourceTower = sourceTower.filter(d => d.id !== discId);
        const updatedTargetTower = [...targetTower, discToMove];

        setTowerState({
            ...towerState,
            [sourceTowerId]: updatedSourceTower,
            [targetTowerId]: updatedTargetTower,
        });

        setMoves(moves + 1);
    }

    return (
        <main className="game">
            <ToastContainer />
            <DndContext onDragEnd={handleDragEnd}>
                <Tower towerId="t1" discs={towerState.t1} />
                <Tower towerId="t2" discs={towerState.t2} />
                <Tower towerId="t3" discs={towerState.t3} />
            </DndContext>
        </main>
    );
}
