import { useDroppable } from '@dnd-kit/core';
import Disc from "./Disc";
import styles from "./Tower.module.css";

export default function Tower({ towerId, discs }) {
  const { setNodeRef } = useDroppable({
    id: towerId,
  });

  return (
    <section ref={setNodeRef} className={styles.tower}>
      <div className={styles.discContainer}>
        {discs.slice().reverse().map((disc, i) => (
          <Disc
            key={i}
            disc={disc}
            isTopDisc={i === 0}
            width={disc.width} // Assuming each disc object has a 'width' property
          />
        ))}
      </div>
    </section>
  );
}
