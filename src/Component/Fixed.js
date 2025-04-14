export default function Fixed() {
    return (
        <div style={{position: 'fixed', top: '50%', zIndex: '10', right: '0'}} className="flex items-center flex-col">
            <div style={{textAlign: 'center', padding: '10px', cursor: 'pointer', background: 'black', color: 'white', borderRadius: '6px'}}>
                <span className="bonus">700+</span>
                <p className="bonus">Websites</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', cursor: 'pointer', whiteSpace: 'normal', padding: '10px', background: 'green', color: 'white', borderRadius: '6px'}}>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    )
}