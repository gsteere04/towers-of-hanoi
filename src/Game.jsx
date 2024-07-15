import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { discs } from "./assets/discs";
import Tower from "./Tower";

export default function Game() {
  const [parent, setParent] = useState(null);
  const [moves, setMoves] = useState(0);
  const [towerState, setTowerState] = useState({
    t1: [...discs].reverse(),
    t2: [],
    t3: [],
  });

  // Check for the win condition, which is if the discs are all on the right tower
  useEffect(() => {
    if (towerState.t3.length === discs.length) {
      tellUserTheyWon();
    }
  }, [towerState]);

  const toastConfig = {
    position: "top-center",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };
  const message = "Yo, I'm gonna need you to stop.";
  const yellAtUser = () => toast.error(message, toastConfig);
  const winMessage = `Hooray. It only took you...${moves} moves? Hmm... *awkward cough* Good job.`;
  const tellUserTheyWon = () => toast.success(winMessage, toastConfig);

  function handleDragEnd({ active, over }) {
    setParent(over ? over.id : null);

    const newT1 = towerState.t1.filter(disc => disc.id !== active.id);
    const newT2 = towerState.t2.filter(disc => disc.id !== active.id);
    const newT3 = towerState.t3.filter(disc => disc.id !== active.id);

    const disc = discs.find(disc => disc.id === active.id);

    const targetDiscs = towerState[over.id];
    if (targetDiscs.length > 0) {

      const lastDisc = targetDiscs[targetDiscs.length - 1];

    
      if (disc.id < lastDisc.id) {
        // Deny the move
        console.log("bad move");
        yellAtUser();
        return;
      }
    }

    if (over.id === "t1") newT1.push(disc);
    else if (over.id === "t2") newT2.push(disc);
    else if (over.id === "t3") newT3.push(disc);

    setMoves(prev => prev + 1);

    setTowerState({
      t1: newT1,
      t2: newT2,
      t3: newT3,
    });
  }

  return (
    <main>
      <DndContext onDragEnd={handleDragEnd}>
        <Tower towerId={"t1"} discs={towerState.t1} />
        <Tower towerId={"t2"} discs={towerState.t2} />
        <Tower towerId={"t3"} discs={towerState.t3} />
      </DndContext>
    </main>
  );
}