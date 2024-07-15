import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import styles from "./Disc.module.css"; 

export default function Disc({ disc, isTopDisc, width }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: disc.id,
    disabled: !isTopDisc,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    width: `${width}px`, 
    height: "auto", 
  };

  return (
    <img
      src={disc.disc}
      alt={"Disc"}
      ref={setNodeRef}
      className={`${styles.discImage} ${styles[`size${width}`]}`} 
      style={style}
      draggable={false}
      {...listeners}
      {...attributes}
    />
  );
}
