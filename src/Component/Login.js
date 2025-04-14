

export default function Login({ showLogin, setShowLogin }) {
    return (
        <div className="login" style={{
            transform: `scale(${showLogin ? '1' : '0'})`,
            width: '380px',
            transition: '0.1s all',
            position: 'absolute',
            top: '10%', right: '10%',
            padding: '20px 10px',
            zIndex: '88',
            background: 'white',
            boxShadow: '0 0 10px 1px rgba(0,0,0,.2)'
        }}>
            <div className="flex justify-between items-center p-5">
                <div>
                    <h4 style={{ fontSize: '30px', fontWeight: '400' }}>Login</h4>
                </div>
                <div>
                    <span onClick={() => setShowLogin(false)} className="xmark" style={{ fontSize: '35px', color: 'gray', cursor: 'pointer' }}>&times;</span>
                </div>
            </div>
            <form>
                <div style={{ width: '100%', margin: '8px' }}>
                    <input style={{ width: '100%', padding: '13px', outline: 'none', borderBottom: '1px solid #bb5644' }} type="text" placeholder="username or email "></input>
                </div>
                <div style={{ width: '100%', margin: '8px' }}>
                    <input style={{ width: '100%', padding: '13px', outline: 'none', borderBottom: '1px solid #bb5644' }} placeholder="password" type="password"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <span style={{ color: 'inherit', marginLeft: '10px' }}>Remember me</span>
                </div>
                <button style={{ width: '100%', padding: '14px', background: '#bb5644', color: 'white', fontWeight: 'bold', marginTop: '15px' }}>Login</button>
                <div className="text-center p-2">
                    <span style={{ color: 'gray', cursor: 'pointer', textAlign: 'center' }}>Lost your password?</span>
                </div>
            </form>
        </div>
    )
}