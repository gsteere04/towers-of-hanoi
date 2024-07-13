import Disc from './Disc';

export default function Tower({ towerId, disc }) {
    const styles = {
        backgroundImage: "url('./assets/tower.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        height: '40vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-end',
    };
    const { setNodeRef } = useDroppable({
        id: towerId,
    });

    const discSizes = [
        { size: 230 },
        { size: 170 },
        { size: 125 },
    ];
    

    return (
        <section ref={setNodeRef} style={styles}>
            {disc.map((disc, i) => <Disc key={i} disc={disc} isTopDisc={i === disc.length - 1} />)}
        </section>
    );
}
