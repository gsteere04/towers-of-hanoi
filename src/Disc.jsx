export default function Disc({ image, positionStyle, size }) {
    const innerDivStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        ...positionStyle,
    };

    return (
        <div className="disc" style={innerDivStyles}></div>
    );
}
