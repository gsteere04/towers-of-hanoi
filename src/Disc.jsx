import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import styles from "./Disc.module.css"; // Assuming you have a separate CSS file for Disc

export default function Disc({ disc, isTopDisc, width }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: disc.id,
    disabled: !isTopDisc,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    width: `${width}px`, // Set the width dynamically based on prop
    height: "auto", // Maintain aspect ratio
  };

  return (
    <img
      src={disc.disc}
      alt={"Disc"}
      ref={setNodeRef}
      className={`${styles.discImage} ${styles[`size${width}`]}`} // Apply size class dynamically
      style={style}
      draggable={false}
      {...listeners}
      {...attributes}
    />
  );
}
