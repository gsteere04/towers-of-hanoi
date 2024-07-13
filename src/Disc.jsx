export default function Disc({ image, positionStyle, size }) {
    const innerDivStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        width: `${size}px`,
        height: `50px`,
        ...positionStyle,
    };

    return (
        <div className="disc" style={innerDivStyles}></div>
    );
}
