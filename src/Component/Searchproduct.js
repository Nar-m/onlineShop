import { useState } from "react"

export default function Searchproduct({Handlessearch}){
    const [value, seTvalue] = useState("")
    return(
        <div className="flex justify-center items-center p-10">
            <form onSubmit={(e)=>{
                e.preventDefault();
                seTvalue("");
                Handlessearch(value)
            }}>
                <input onChange={(e)=> seTvalue(e.target.value)} value={value} style={{width: '380px' ,padding: '10px', outline: 'none', borderBottom: '2px solid green'}} type="search" placeholder="search"></input>
                <button style={{padding: '10px 35px', color: 'white', background: 'green'}}>Search</button>
            </form>
        </div>
    )
}