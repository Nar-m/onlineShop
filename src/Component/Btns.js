export default function Btns({Showmore}){
    return(
        <div className="flex justify-center items-center p-10">
            <button onClick={Showmore} style={{padding: '15px 35px', borderRadius: '8px', background: 'green', color: 'white'}}>Show more</button>
        </div>
    )
}