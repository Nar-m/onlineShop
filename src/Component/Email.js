import { useState } from "react"

export default function Email() {
    const [value, setValue] = useState("");
    const [errormessage, setEroormessage] = useState("")

    function EmailValiadation() {
        const emailregax = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (value === "") {
            setEroormessage("email cand by empty")
        }
        else if (!emailregax.test(value)) {
            setEroormessage("Not error email")
        }
        else {
            setEroormessage("")
        }
    }

    return (
        <div style={{ marginTop: '15px' }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                EmailValiadation()
            }} className="flex">
                <div style={{
                    display: `${errormessage ? 'block' : 'none'}`,
                    padding: '12px',
                    color: 'white',
                    background: 'red'
                }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '5px' }}>&times;</span>
                </div>
                <input onChange={(e) => setValue(e.target.value)} value={value} style={{
                    outline: 'none',
                    width: '320px',
                    padding: '10px',
                    background: 'none',
                    borderBottom: `${errormessage ? '1px solid #bb5644' : '1px solid green'}`
                }} type="email" placeholder="email"></input>
                <button className="signup" >Sign up</button>
            </form>
            <span style={{ color: 'red', fontSize: '18px' }}>{errormessage}</span>
        </div>
    )
}