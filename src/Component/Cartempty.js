export default function Cartempty() {
    return (
        <div className="flex justify-center items-center p-10 text-center">
            <div>
                <i style={{fontSize: '40px', color: 'gray'}} className="fa-solid fa-bag-shopping"></i>
                <p style={{ fontSize: '18px', color: 'gray', marginTop: '20px' }}>Your cart is currently empty.</p>
            </div>
        </div>
    )
}