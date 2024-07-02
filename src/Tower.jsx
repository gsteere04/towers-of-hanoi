import Disc from './Disc';

export default function Tower() {
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
        alignItems: 'center', // Center items horizontally
        justifyContent: 'flex-end', // Align items to the bottom of the container
    };

    const discSizes = [
        { size: 230 },
        { size: 170 },
        { size: 125 },
    ];

    return (
        <div style={styles}>
            <Disc image="./assets/ring1.png" positionStyle={{ bottom: '0' }} size={discSizes[0].size} />
            <Disc image="./assets/ring2.png" positionStyle={{ bottom: '80px' }} size={discSizes[1].size} />
            <Disc image="./assets/ring3.png" positionStyle={{ bottom: '160px' }} size={discSizes[2].size} />
        </div>
    );
}
