export default function Sydbarcategory({ category }) {
    const { name, text, image } = category
    return (
        <div style={{ transition: '0.3s all', width: '100%', height: '100%' }} className="flex p-5">
            <div>
                <h2 style={{ fontSize: '26px' }}>{name}</h2>
            </div>
            <div style={{ marginLeft: '40px', textAlign: 'center' }}>
                <img style={{ borderRadius: '8px' }} src={image}></img>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{text}</span>
            </div>
        </div>
    )
}