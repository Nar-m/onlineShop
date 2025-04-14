export default function Productfilter({Showsydbar}) {
    return (
        <div className="flex justify-end p-10 items-center">
            <span onClick={Showsydbar} className="filter">
                <i style={{ marginRight: '10px' }} className="fa-solid fa-list"></i>
                <span style={{ fontSize: '17px' }}>Filter</span>
            </span>
        </div>
    )
}