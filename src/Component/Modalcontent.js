export default function Modalcontent({ element }) {
    return (
        <>
            <div>
                <picture>
                    <img style={{ height: '350px' }} src={element.image}></img>
                </picture>
            </div>
            <div className="flex justify-between items-center flex-col p-10" style={{ width: '50%' }}>
                <h1 style={{ fontSize: '26px' }}>{element.title}</h1>
                <h2 style={{ fontSize: '20px' }}>{element.category}</h2>
                <span>{element.price}</span>
                <p style={{ fontSize: '18px', textAlign: 'center' }}>{element.description}</p>
                <button style={{ padding: '15px 35px', background: 'green', color: 'white', marginTop: '20px', borderRadius: '8px' }}>Add to Carts</button>
            </div>
        </>
    )

}