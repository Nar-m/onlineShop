
export default function Cartbotom({ ClearAll, totael }) {

    return (
        <div className="flex justify-between items-center p-10">
            <span style={{ fontSize: '25px' }}>Totael {totael} $</span>
            <i onClick={ClearAll} style={{ fontSize: '18px', color: 'red' }} className="fa-solid fa-trash"></i>
        </div>
    )
}