export default function Slidtext({ curentindex, item }) {
    return (
        <div>
            {curentindex && (
                <div className="flex justify-between items-center p-10 flex-col">
                    <h1 className= 'product'
                       
                    >{item.title}</h1>
                    <span className= 'productprice' style={{ fontSize: '36px' }}>{item.price}</span>
                    <button className= 'productbtn'  style={{ marginTop: '10px', padding: '6px', color: '#bb5644', borderBottom: '2px solid #bb5644' }}>Buy now</button>
                </div>

            )}
        </div>
    )
}