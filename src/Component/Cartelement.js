export default function Cartelement({ cartnow, Removeitem, Plusquantity, Minusquantity }) {


    return (
        <div>
            {cartnow.map((item, index) => {
                return (
                    <div key={index} className="flex relative justify-between items-center p-10 border">
                        <picture>
                            <img style={{ height: '80px' }} src={item.image} alt={item.title}></img>
                        </picture>
                        <div>
                            <h2>{item.price}</h2>
                            <div className="border flex items-center justify-between" style={{ width: '85px',  marginTop: '10px', padding: '8px' }}>
                                <button onClick={()=>{
                                    Minusquantity(item.id)
                                }} style={{ fontSize: '20px' }}>-</button>
                                {item.quantity}
                                <button onClick={()=>{
                                    Plusquantity(item.id)
                                }} style={{ fontSize: '20px' }}>+</button>
                            </div>
                        </div>
                        <div>
                            <span>{item.title}</span>
                        </div>
                        <div>
                            <span>{item.category}</span>
                        </div>
                        <span onClick={() => {
                            Removeitem(item.id)
                        }} style={{ fontSize: '35px', color: 'black', cursor: 'pointer' }}>&times;</span>
                    </div>
                )
            })}
        </div>
    )
}