export default function Sydbarcontent({ item, Lookcategory }) {
    const { name } = item
    return (
        <div>
            <ul>
                <li onMouseMove={(e) => {
                    e.preventDefault();
                    Lookcategory(item)
                }} onMouseDown={(e)=>{
                    e.preventDefault();
                }}>{name}</li>
            </ul>
        </div>
    )
}